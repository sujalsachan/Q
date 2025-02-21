// src/app/page.js (or src/pages/index.js depending on your Next.js version)
"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(""); // Separate error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    const formattedInput = input.split(" ").map((item) => item.trim());

    try {
      const res = await fetch("https://two2bcs10801.onrender.com/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formattedInput }),
      });

      if (!res.ok) {
        const errorData = await res.json(); // Try to parse JSON error response
        throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message); // Set error state
      setResponse(null); // Clear previous response
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-2xl shadow-lg p-6">
        <h1 className="text-center text-2xl font-bold text-blue-400 mb-4">
          Bajaj Data Processor
        </h1>

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

        {error && (
          <div className="mt-4 p-4 bg-red-700 rounded-lg">
            <p className="text-white">{error}</p>
          </div>
        )}

        {response && !error && ( // Only show results if there's no error
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <h2 className="text-lg font-bold text-gray-300">Results:</h2>
            <p className="text-gray-400">
              <strong>Numbers:</strong> {response.numbers.join(", ") || "None"}
            </p>
            <p className="text-gray-400">
              <strong>Alphabets:</strong>{" "}
              {response.alphabets.join(", ") || "None"}
            </p>
            <p className="text-gray-400">
              <strong>Highest Alphabet:</strong>{" "}
              {response.highest_alphabet.join(", ") || "None"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
