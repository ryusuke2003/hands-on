"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/entries", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push("/thanks");
      } else {
        alert("Submission failed");
      }
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-2 rounded-lg bg-white p-6 shadow"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="rounded border border-gray-300 p-2"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="rounded border border-gray-300 p-2"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="rounded border border-gray-300 p-2"
        />
        <button
          type="submit"
          className="rounded border border-gray-300 bg-gray-100 p-2 hover:bg-gray-200"
        >
          Send
        </button>
      </form>
      <div className="mt-4 flex gap-4">
        <Link href="/entries" className="text-blue-600 hover:underline">
          View entries
        </Link>
        <Link href="/todo" className="text-blue-600 hover:underline">
          Todo list
        </Link>
        <Link href="/calculator" className="text-blue-600 hover:underline">
          Calculator
        </Link>
      </div>
    </main>
  );
}
