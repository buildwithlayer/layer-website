"use client";

import React from "react";
import { useMediaQuery } from "usehooks-ts";
import LayerLogo from "public/LayerLogo.svg";
import InfoIcon from "public/info-icon.svg";
import SendIcon from "public/send-icon.svg";
import ThumbDownFilled from "public/thumb-down-filled.svg";
import ThumbDownOutlined from "public/thumb-down-outlined.svg";
import ThumbUpFilled from "public/thumb-up-filled.svg";
import ThumbUpOutlined from "public/thumb-up-outlined.svg";
import Image from "next/image";

type ExampleType = "standard" | "extension";

const ChatExampleSelector = ({
  exampleType,
  setExampleType,
}: {
  exampleType: ExampleType;
  setExampleType: (type: ExampleType) => void;
}) => {
  return (
    <div className="flex justify-center items-center p-[2px] border-[1px] border-gray-200 rounded-[4px] w-fit">
      <button
        className="py-2 px-4 rounded-[4px] font-semibold"
        style={{
          backgroundColor:
            exampleType === "standard" ? "#7b65ff" : "transparent",
          color: exampleType === "standard" ? "#fff" : "var(--gray-600)",
        }}
        onClick={() => setExampleType("standard")}
      >
        Before Layer
      </button>
      <button
        className="py-2 px-4 rounded-[4px] font-semibold"
        style={{
          backgroundColor:
            exampleType === "extension" ? "#7b65ff" : "transparent",
          color: exampleType === "extension" ? "#fff" : "var(--gray-600)",
        }}
        onClick={() => setExampleType("extension")}
      >
        With Layer
      </button>
    </div>
  );
};

const ChatMessage = ({
  type,
  role,
  ratings,
  children,
}: {
  type: ExampleType;
  role: "user" | "agent";
  ratings: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="flex py-2 px-4 gap-2 min-h-[48px] items-center color-gray-900 border-[1px] border-gray-100 rounded-[4px] text-left text-[14px]"
      style={{
        backgroundColor: role === "user" ? "var(--gray-0)" : "var(--gray-50)",
      }}
    >
      <div className="flex items-start gap-2 py-1 px-0 w-full">
        {children}
        {ratings && (
          <div className="flex gap-3 pt-[2px]">
            {type === "standard" ? (
              <>
                <ThumbUpOutlined width={16} fill="var(--gray-900)" />
                <ThumbDownFilled width={16} fill="#EB5757" />
              </>
            ) : (
              <>
                <ThumbUpFilled width={16} fill="#27AE60" />
                <ThumbDownOutlined width={16} fill="var(--gray-900)" />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ChatExample = ({ type }: { type: ExampleType }) => {
  return (
    <div className="flex flex-col rounded-[4px] border-[1px] border-gray-200 overflow-hidden w-full dark:bg-gray-100 light:bg-gray-50">
      <div
        className="flex items-center justify-center py-1 px-4 gap-3 font-semibold min-h-[48px]"
        style={{
          backgroundColor:
            type === "standard" ? "var(--gray-50)" : "var(--primary)",
          color: type === "standard" ? "var(--gray-1000)" : "white",
        }}
      >
        {type === "extension" && <LayerLogo fill="white" width={24} />}
        <p>{type === "standard" ? "Standard LLM" : "Agentic LLM Extension"}</p>
      </div>
      {type === "extension" && (
        <div className="bg-gray-50 flex justify-center items-center gap-2 py-1 px-4 font-semibold min-h-[48px] border-b-[1px] border-gray-200 text-primary">
          <a
            href="https://docs.buildwithlayer.com/llm_extensibility"
            target="_blank"
            className="inline-flex gap-1 text-primary items-center underline hover:bg-primaryHover rounded-md px-1"
          >
            <InfoIcon fill="var(--primary)" width={16} />
            <p className="text-[14px]">Learn more about LLM Extensibility</p>
          </a>
        </div>
      )}
      {type === "standard" ? (
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col p-2 gap-2">
            <ChatMessage type={type} role="user" ratings={false}>
              <p className="text-gray-800">
                How do I create a new project in Neon?
              </p>
            </ChatMessage>
            <ChatMessage type={type} role="agent" ratings={true}>
              <p className="text-gray-800">
                Starting a neon project can be a fun and creative process,
                whether you&apos;re aiming to make neon signs, art pieces, or
                custom lighting. Here&apos;s a general guide to help you get
                started:
              </p>
            </ChatMessage>
            <ChatMessage type={type} role="user" ratings={false}>
              <p className="text-gray-800">
                Can you create a Neon project for me?
              </p>
            </ChatMessage>
            <ChatMessage type={type} role="agent" ratings={false}>
              <p className="text-gray-800">
                {`I'd love to help you with the design or planning stages, but `}
                <strong>
                  unfortunately, I can&apos;t physically create or install the
                  neon project for you.
                </strong>
              </p>
            </ChatMessage>
          </div>
          <div className="p-4">
            <ChatMessage type={type} role="user" ratings={false}>
              <div className="flex justify-between items-center w-full">
                <p className="text-[24px]/[24px] w-full">🤬🤬🤬🤬🤬🤬</p>
                <SendIcon fill="var(--gray-400)" width={24} />
              </div>
            </ChatMessage>
          </div>
        </div>
      ) : (
        <div className="flex flex-col p-2 gap-2">
          <ChatMessage type={type} role="user" ratings={false}>
            <p className="text-gray-800">
              <span className="py-0 px-1 text-primary rounded-[4px] mr-[6px] font-semibold bg-primaryHover">
                @neon
              </span>
              How do I create a new project in Neon?
            </p>
          </ChatMessage>
          <ChatMessage type={type} role="agent" ratings={true}>
            <div className="flex flex-col">
              <p className="text-gray-800">To create a Neon project:</p>
              <ol className="pl-6 flex flex-col gap-[6px] mb-0 list-decimal">
                <li>Navigate to the Neon Console. Click New Project.</li>
                <li>
                  Specify values for
                  <strong>
                    Project Name, Postgres version, Cloud Service Provider,
                  </strong>{" "}
                  and <strong>Region</strong>.
                </li>
                <li>Click Create Project.</li>
              </ol>
            </div>
          </ChatMessage>
          <ChatMessage type={type} role="user" ratings={false}>
            <p className="text-gray-800">
              Create one for me, and name it “new-project”
            </p>
          </ChatMessage>
          <ChatMessage type={type} role="agent" ratings={false}>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-1 w-full pb-2 border-b-[1px] border-gray-200">
                <p className="text-[12px] text-gray-500">
                  Called with 1 argument
                </p>
                <p className="text-gray-800 overflow-hidden text-ellipsis">
                  <span className="py-0 px-[6px] text-white bg-primary rounded-[4px] mr-[6px]">
                    POST
                  </span>
                  https://console.neon.tech/api/v2/projects
                </p>
              </div>
              <p>Created “new-project”:</p>
              <div className="bg-[#262626] py-2 px-1 rounded-[4px] max-h-[150px] overflow-y-auto">
                <Image
                  src={"/neon-response.png"}
                  alt="Neon API Request Response"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="w-full"
                ></Image>
              </div>
            </div>
          </ChatMessage>
        </div>
      )}
    </div>
  );
};

const ChatExamples = () => {
  const smallScreen = useMediaQuery("(max-width: 768px)");
  const [exampleType, setExampleType] = React.useState<ExampleType>("standard");
  return (
    <div className="flex flex-col gap-10 items-center">
      {smallScreen && (
        <ChatExampleSelector
          exampleType={exampleType}
          setExampleType={setExampleType}
        />
      )}
      <div className="flex gap-4 w-full">
        {(!smallScreen || exampleType === "standard") && (
          <ChatExample type="standard" />
        )}
        {(!smallScreen || exampleType === "extension") && (
          <ChatExample type="extension" />
        )}
      </div>
    </div>
  );
};

export default ChatExamples;
