'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push('/thanks');
      } else {
        alert('Submission failed');
      }
    } catch (err) {
      alert('Submission failed');
    }
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '16px',
        }}
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ padding: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ padding: '8px', border: '1px solid #ccc' }}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          style={{ padding: '8px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            background: '#f0f0f0',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
    </main>
  );
}
