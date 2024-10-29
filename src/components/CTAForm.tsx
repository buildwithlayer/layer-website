/** @jsxImportSource @emotion/react */
import React, { FormEvent, useEffect } from "react";
import Modal from "./Modal";
import { css } from "@emotion/react";
import { Colors } from "../constants/Colors";
import Button from "./Button";
import { sendEmail } from "../utils/sendEmail";
import { ReactComponent as CheckCircleIcon } from "../assets/icons/check-circle-icon.svg";

const CTAForm = ({
  open,
  setOpen,
  initialDocsLink,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  initialDocsLink: string;
}) => {
  const inputStyles = css`
    border-radius: 4px;
    border: 1px solid ${Colors.gray[200]};
    padding: 16px 12px;
    flex-grow: 1;
    &:focus {
      border: 1px solid ${Colors.primary.main};
      outline: none;
    }
    &::placeholder {
      color: ${Colors.gray[300]};
    }
  `;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [docsLink, setDocsLink] = React.useState(initialDocsLink);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonDisabled(true);
    sendEmail(
      "Website Submission: Generate My Expert",
      `Name: ${name}\nEmail: ${email}\nDocs Link: ${docsLink}`
    )
      .then(() => {
        setFormSubmitted(true);
        setButtonDisabled(false);
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error submitting your form. Please try again.");
        setButtonDisabled(false);
      });
  };

  useEffect(() => {
    setDocsLink(initialDocsLink);
    setName("");
    setEmail("");
    setFormSubmitted(false);
  }, [open]);

  return (
    <Modal open={open} setOpen={setOpen}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          padding: "32px",
        }}
      >
        {formSubmitted ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              alignItems: "center",
              maxWidth: "600px",
            }}
          >
            <CheckCircleIcon
              fill={Colors.primary.main}
              width={"96px"}
              height={"96px"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h2>Your AI expert is being generated!</h2>
              <p>
                You'll receive an email when it's ready to configure and deploy.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "center",
                maxWidth: "600px",
                textAlign: "center",
              }}
            >
              <h2>Generate an AI Expert for Your Docs</h2>
              <p>
                By filling out this form, we will customize an integration copilot for your docs or website.  We will get back to you within a few days.
              </p>
            </div>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "100%",
                alignItems: "center",
              }}
              onSubmit={handleSubmit}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  width: "100%",
                  maxWidth: "600px",
                }}
              >
                <p>Name</p>
                <input
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  css={inputStyles}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  width: "100%",
                  maxWidth: "600px",
                }}
              >
                <p>Email</p>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  css={inputStyles}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  width: "100%",
                  maxWidth: "600px",
                }}
              >
                <p>Link to your docs or website</p>
                <input
                  type="url"
                  placeholder="https://yoursite.com/docs"
                  value={docsLink}
                  onChange={(e) => {
                    setDocsLink(e.target.value);
                  }}
                  css={inputStyles}
                  required
                />
              </div>
              <Button
                label="Generate My Expert"
                type="primary"
                onClick={() => {}}
                fullWidth
                styleOverrides={{ maxWidth: "600px" }}
                submitButton
                disabled={buttonDisabled}
              />
            </form>
          </>
        )}
      </div>
    </Modal>
  );
};

export default CTAForm;
