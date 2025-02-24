"use client";

import React, { FormEvent } from "react";
import Button from "../../Button";

const NewsletterSignUp = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    setEmail("");
    setSubmitted(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby0MPiJx7Ugbf5Mz5udgF2KPFUe0O55vfYOIqNn-6-G3hm4jgatzIb6rrniDZ0bZQHQ/exec",
        {
          redirect: "follow",
          method: "POST",
          body: formData,
        }
      );
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <form
        className="flex items-stretch rounded-md overflow-hidden border border-gray-100 w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="border-none outline-none rounded-r-none px-4 py-2 w-full text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Business Email Address"
          required
        />
        <Button
          label="Subscribe"
          type="submit"
          handleClick={() => {}}
          styleOverrides={{ borderRadius: 0, fontSize: "16px" }}
        />
      </form>
      {submitted && <p className="text-white">Thanks for signing up!</p>}
    </div>
  );
};

export default NewsletterSignUp;
