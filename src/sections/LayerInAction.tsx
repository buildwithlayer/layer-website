import React from "react";
import { Colors } from "../constants/Colors";

const LayerInAction = ({
  screenWidth,
}: {
  screenWidth: "sm" | "md" | "lg";
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "100%",
      }}
    >
      <h2 style={{ textAlign: "center" }}>How it Works</h2>
      <div
        style={{
          display: "flex",
          flexDirection: screenWidth === "lg" ? "row" : "column",
          alignItems: "stretch",
          gap: "16px",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
            borderRadius: "8px",
            gap: "8px",
          }}
        >
          <h3>Connect Your Knowledgebase</h3>
          <p>
            Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien id
            aliquam neque.
          </p>
          <img
            src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
            alt=""
            style={{
              width: "100%",
              marginTop: "16px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
            borderRadius: "8px",
            gap: "8px",
          }}
        >
          <h3>Publish Your Extension</h3>
          <p>
            Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien id
            aliquam neque.
          </p>
          <img
            src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
            alt=""
            style={{
              width: "100%",
              marginTop: "16px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
            borderRadius: "8px",
            gap: "8px",
          }}
        >
          <h3>Learn From Your Developers</h3>
          <p>
            Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien id
            aliquam neque.
          </p>
          <img
            src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
            alt=""
            style={{
              width: "100%",
              marginTop: "16px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LayerInAction;
