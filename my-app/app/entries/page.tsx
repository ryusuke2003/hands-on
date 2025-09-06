"use client";

import { useEffect, useState } from "react";

interface Entry {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function EntriesPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch(() => setEntries([]));
  }, []);

  const q = search.toLowerCase();
  const filtered = entries.filter(
    (entry) =>
      entry.name.toLowerCase().includes(q) ||
      entry.email.toLowerCase().includes(q) ||
      entry.message.toLowerCase().includes(q),
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-xl font-semibold">Entries</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search entries"
        className="mt-4 w-full max-w-md rounded border border-gray-300 p-2"
      />
      <ul className="mt-4 w-full max-w-md">
        {filtered.length === 0 && (
          <li className="text-sm text-gray-600">No entries found</li>
        )}
        {filtered.map((entry) => (
          <li key={entry.id} className="border-b py-2">
            <p className="font-medium">{entry.name}</p>
            <p className="text-sm text-gray-600">{entry.message}</p>
            <p className="text-sm text-gray-600">{entry.email}</p>
            <p className="text-xs text-gray-400">
              {new Date(entry.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
