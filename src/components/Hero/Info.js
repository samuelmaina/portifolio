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
          - Learning-focused Software Engineer with BSc. Computer Science and
          motivation to build strong career foundation alongside successful
          team.
        </SectionText>
        <SectionText>
          -Well versed with JavaScript, TypeScript, C++, Python,Java, SQL and
          NoSQL databases and backend Technologies and ready to further develop
          skills acquired from education.
        </SectionText>
        <SectionText>
          -Advanced abilities in Agile methodologies and software testing.
        </SectionText>
        <SectionText>
          -Always ready to learn new processes and help improve software
          systems.
        </SectionText>
        <SectionText>
          - Skilled in software design, testing ,debugging, deployment and
          maintenance.
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
