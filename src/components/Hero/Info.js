import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, Img } from "./HeroStyles";

export default function Info() {
  return (
    <>
      <Section nopadding>
        <SectionTitle main center>
          Samuel Maina W.
          <br />
        </SectionTitle>
        <SectionText>
          -A fullstack software engineer who has developed software for over 3
          years in dynamically typed languages(JavaScript(vanilla), Node.js ,
          React.js, Python) as well as strongly typed languages(C++,TypeScript,
          C,java and C#).
        </SectionText>

        <SectionText>
          -Experienced in different SDLC processes such as Design,Testing,
          Debugging, Deployment and Maintainance.
        </SectionText>
        <SectionText>
          -Experienced in Artificial Intelligence, Data Science and Machine
          Learning.
        </SectionText>

        <SectionText>
          - Passionate about software engineering. Have read many software
          engineering books(videos and articles) and practiced many of the
          principles and practices.
        </SectionText>
        <SectionText>
          -In love with reading, anything to do with space exploration(such as
          rocket science) and chess.
        </SectionText>
      </Section>
    </>
  );
}