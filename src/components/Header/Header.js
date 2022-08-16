import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import Button from "../../styles/GlobalComponents/Button";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="4rem" /> <span>Portfolio</span>
        </a>
      </Link>

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          color: "white",
        }}
      >
        <Button>
          <a
            href="https://drive.google.com/file/d/1HpB2HzYlpFf7pFDoOi6Hf7J2ve8C54-J/view?usp=sharing"
            target="_blank"
            style={{ color: "white" }}
          >
            Download Resume
          </a>
        </Button>
      </div>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#education">
          <NavLink>Education</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#accomplishments">
          <NavLink>Certificates and Awards</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact-me">
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/samuelmaina" target="_blank">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/samuel-maina-339a431a1/"
        target="_blank"
      >
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
