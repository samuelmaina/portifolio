import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, Img } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section column nopadding>
      <Img src="/images/dp_1.jpg" />
      <LeftSection>
        <SectionTitle main center>
          Samuel Maina Wanjiru <br />
        </SectionTitle>
        <SectionText>
          -A fullstack software engineer who has developed software for over 3
          years in dynamically(JavaScript(vanilla), Node.js , React.js, Python)
          and statically typed languages(C++,TypeScript, C,java and C#).
        </SectionText>
        <SectionText>
          -Experienced in different SDLC process such as Architecture,
          Design,Testing, Debugging, Deployment and Maintainance.
        </SectionText>
        <SectionText>
          - Passionate about software engineering. Have read many software
          engineering books(articles) and practiced many of the principles and
          practices.
        </SectionText>
        <SectionText>
          -In love with reading, anything to do with space exploration(such as
          Rocket Science) and chess
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
