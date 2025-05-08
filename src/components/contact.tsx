"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="w-full max-w-screen px-4 py-3">
      <form
        className="container flex flex-col text-lightblue text-center m-8 max-w-[600px] mx-auto "
        autoComplete="off"
      >
        <h2 className="text-4xl lg:text-6xl">Contact Me</h2>

        <div>
          <label htmlFor="name" className="block text-lg font-medium text-left">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name..."
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border-lightblue border-1 focus:midblue focus:midblue pl-3 pr-3"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-left mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email..."
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border-lightblue border-1 focus:midblue focus:midblue pl-3 pr-3"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-left mt-4"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Leave your message..."
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border-lightblue border-1 focus:midblue focus:midblue px-3 py-2"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-midblue text-white py-2 px-4 rounded-xl hover:opacity-[70%] transition-colors cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
