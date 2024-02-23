import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header className="border-b[#e6ebf4] flex w-full items-center justify-between border-b bg-white px-4 py-4 sm:px-8">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter rounded-md bg-[#6469ff] px-4 py-2 font-medium text-white"
        >
          Create
        </Link>
      </header>
      <main className="min-h-[calc(100vh-73px)] w-full bg-[#f9f8fe] px-4 py-8 sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
