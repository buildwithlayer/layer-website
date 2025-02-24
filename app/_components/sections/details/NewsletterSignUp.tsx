"use client";

import React, { FormEvent } from "react";
import Button from "../../Button";
import { appendRowToSheet } from "@/app/_clients/gapi";

const NewsletterSignUp = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted " + email);
    try {
      await appendRowToSheet(
        [[email]],
        process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "",
        "Sheet1!A:A"
      );
      setEmail("");
      setSubmitted(true);
    } catch {
      console.error("Error appending row");
      alert("Error submitting email. Please try again later.");
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
