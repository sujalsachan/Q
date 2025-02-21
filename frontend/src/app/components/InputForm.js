"use client";
import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <input
        type="text"
        placeholder="Enter numbers & letters (comma-separated)"
        className="border p-2 w-96 text-lg"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-md text-lg"
        onClick={() => onSubmit(input)}
      >
        Submit
      </button>
    </div>
  );
}
