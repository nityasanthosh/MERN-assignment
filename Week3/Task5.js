import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${form.email}\nPassword: ${form.password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <input
        type="email"
        placeholder="Email"
        className="p-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Login
      </button>
    </form>
  );
}
