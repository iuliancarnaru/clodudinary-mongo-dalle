import React from "react";

function FormField({
  type,
  name,
  labelName,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="rounded-[5px] bg-[#ececf1] px-2 py-1 text-xs font-semibold text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="focus:border=[#4649ff] block w-full rounded border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:ring-[#4649ff]"
      />
    </div>
  );
}

export default FormField;
