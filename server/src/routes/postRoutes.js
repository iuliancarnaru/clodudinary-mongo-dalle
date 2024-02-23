import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongo/models/post.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false, message: error });
  }
});

router.route("/").post(async (req, res) => {
  const { name, prompt, photo } = req.body;

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const { secure_url } =
      (await cloudinary.uploader.upload(photo, options)) ?? {};

    const newPost = await Post.create({
      name,
      prompt,
      photo: secure_url,
    });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
