/** @jsxImportSource @emotion/react */
import React from "react";
import { Colors } from "../constants/Colors";
import { css } from "@emotion/react";

const NavLink = ({
  section,
  mobile = false,
}: {
  section: string;
  mobile?: boolean;
}) => {
  const activeLink = "Overview";

  if (!mobile) {
    const navLinkStyle = css`
      cursor: pointer;
      text-decoration: none;
      padding: 8px 12px;
      color: ${Colors.gray[500]};
      border-radius: 8px;
      border: none;
      background-color: transparent;
      &:hover {
        box-shadow: inset 0px 0px 0px 1px ${Colors.gray[200]};
      }
      &:active {
        color: ${Colors.primary.main};
      }
    `;

    return (
      <a css={navLinkStyle} href={"#" + section} className="button">
        {section}
      </a>
    );
  } else {
    const navLinkStyle = css`
      cursor: pointer;
      text-decoration: none;
      padding: 16px 24px;
      color: ${Colors.gray[500]};
      border: none;
      background-color: transparent;
      width: 100%;
      &:hover {
        background-color: ${Colors.gray[200]};
      }
      &:active {
        color: white;
        background-color: ${Colors.primary.main};
      }
    `;

    return (
      <a css={navLinkStyle} href={"#" + section} className="button">
        {section}
      </a>
    );
  }
};

export default NavLink;
