"use client";

import { useState } from "react";
import Link from "next/link";

export default function CalculatorPage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult(null);
      return;
    }
    setResult(numA + numB);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-xl font-semibold">Calculator</h1>
      <div className="mt-4 flex w-full max-w-md flex-col gap-2">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="First number"
          className="rounded border border-gray-300 p-2"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Second number"
          className="rounded border border-gray-300 p-2"
        />
        <button
          onClick={calculate}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          type="button"
        >
          Add
        </button>
        {result !== null && (
          <p className="text-lg font-medium" id="result">
            Result: {result}
          </p>
        )}
      </div>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        Back to form
      </Link>
    </main>
  );
}
