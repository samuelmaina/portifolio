import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Button from "../../styles/GlobalComponents/Button";
import { Img, DownLoadButton, HeroSection } from "./HeroStyles";
import Info from "./Info";

const Hero = (props) => (
  <HeroSection row nopadding>
    <Img src="/images/dp_3.jpg" />
    <div>
      <Info />
      <DownLoadButton>
        <Button>
          <a
            target="_blank"
            style={{ color: "white" }}
            href="https://drive.google.com/file/d/1HpB2HzYlpFf7pFDoOi6Hf7J2ve8C54-J/view?usp=sharing"
          >
            Download Resume
          </a>
        </Button>
      </DownLoadButton>
    </div>
  </HeroSection>
);

export default Hero;
