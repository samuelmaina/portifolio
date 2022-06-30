import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Img } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section column nopadding>
      <Img src="/images/samuel.jpg" />
      <LeftSection>
        <SectionTitle main center>
          Samuel Maina Wanjiru <br />
        </SectionTitle>
        <SectionText>
          Software Engineer with over 3 year of experience in developing
          softwares and applications in dynamically and statically typed
          languages.
        </SectionText>
        <SectionText>
          Experienced in different SDLC process such as Architecture,
          Design,Testing, Debugging, Deployment and Maintainance.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
