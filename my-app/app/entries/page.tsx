"use client";

import { useEffect, useState } from "react";

interface Entry {
  id: string;
  name: string;
  email: string;
  message: string;
}

export default function EntriesPage() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    fetch("/api/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch(() => setEntries([]));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-xl font-semibold">Entries</h1>
      <ul className="mt-4 w-full max-w-md">
        {entries.length === 0 && (
          <li className="text-sm text-gray-600">No entries found</li>
        )}
        {entries.map((entry) => (
          <li key={entry.id} className="border-b py-2">
            <p className="font-medium">{entry.name}</p>
            <p className="text-sm text-gray-600">{entry.message}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
