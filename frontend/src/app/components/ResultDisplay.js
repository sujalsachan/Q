export default function ResultDisplay({ result }) {
    return (
      <div className="mt-6 p-4 bg-gray-100 w-96 text-lg">
        <h2 className="text-xl font-bold">Results:</h2>
        <p><strong>Numbers:</strong> {result.numbers?.join(", ")}</p>
        <p><strong>Alphabets:</strong> {result.alphabets?.join(", ")}</p>
        <p><strong>Highest Alphabet:</strong> {result.highest_alphabet}</p>
      </div>
    );
  }
  