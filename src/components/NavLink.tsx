/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { Colors } from "../constants/Colors";
import { css } from "@emotion/react";

const NavLink = ({
  section,
  mobile = false,
  closeMobileNav,
}: {
  section: string;
  mobile?: boolean;
  closeMobileNav?: () => void;
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(section);
    if (targetElement) {
      const offset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    if (mobile && closeMobileNav) closeMobileNav();
  };

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        const offset = 76;
        const elementTop = targetElement.getBoundingClientRect().top;
        const elementBottom = targetElement.getBoundingClientRect().bottom;

        if (elementTop <= offset && elementBottom > offset) {
          const navLink = document.querySelector(`a[href="#${section}"]`);
          if (navLink) {
            navLink.classList.add("active");
          }
        } else {
          const navLink = document.querySelector(`a[href="#${section}"]`);
          if (navLink) {
            navLink.classList.remove("active");
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [section]);

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
      &.active {
        color: ${Colors.primary.main};
      }
    `;

    return (
      <a
        css={navLinkStyle}
        href={"#" + section}
        className="button"
        onClick={handleClick}
      >
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
      &.active {
        color: white;
        background-color: ${Colors.primary.main};
      }
    `;

    return (
      <a
        css={navLinkStyle}
        href={"#" + section}
        className="button"
        onClick={handleClick}
      >
        {section}
      </a>
    );
  }
};

export default NavLink;
