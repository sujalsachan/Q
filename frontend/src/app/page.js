"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedInput = input.split(" ").map(item => item.trim());

    try {
      const res = await fetch("http://localhost:3000/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formattedInput })
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-2xl shadow-lg p-6">
        <h1 className="text-center text-2xl font-bold text-blue-400 mb-4">Bajaj Data Processor</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter space-separated values"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full bg-green-500 p-2 rounded-lg text-white font-semibold hover:bg-green-600 transition">
            Submit
          </button>
        </form>

        {response && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <h2 className="text-lg font-bold text-gray-300">Results:</h2>
            <p className="text-gray-400"><strong>Numbers:</strong> {response.numbers.join(", ") || "None"}</p>
            <p className="text-gray-400"><strong>Alphabets:</strong> {response.alphabets.join(", ") || "None"}</p>
            <p className="text-gray-400"><strong>Highest Alphabet:</strong> {response.highest_alphabet.join(", ") || "None"}</p>
          </div>
        )}
      </div>
    </div>
  );
}
