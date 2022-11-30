import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, Img } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section nopadding row>
      <Img src="/images/dp_3.jpg" />
    </Section>
  </>
);

export default Hero;
