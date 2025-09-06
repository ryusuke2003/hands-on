"use client";

import { useState } from "react";
import Link from "next/link";

export default function TodoPage() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    const trimmed = task.trim();
    if (trimmed.length === 0) return;
    setTodos([...todos, trimmed]);
    setTask("");
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-xl font-semibold">Todo List</h1>
      <div className="mt-4 flex w-full max-w-md gap-2">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task"
          className="flex-grow rounded border border-gray-300 p-2"
        />
        <button
          onClick={addTodo}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          type="button"
        >
          Add
        </button>
      </div>
      <ul className="mt-4 w-full max-w-md">
        {todos.length === 0 && (
          <li className="text-sm text-gray-600">No tasks</li>
        )}
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between border-b py-2">
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="text-sm text-red-600 hover:underline"
              type="button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        Back to form
      </Link>
    </main>
  );
}

