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
          -Well versed in JavaScript, TypeScript, C++, Python,Java, SQL and
          NoSQL databases and backend Technologies.
        </SectionText>
        <SectionText>
          -Advanced abilities in Agile methodologies and software testing.Always
          ready to learn new processes and help improve software systems.
        </SectionText>
        <SectionText>
          - Skilled in software design, testing ,debugging, deployment and
          maintenance.
        </SectionText>
      </Section>
    </>
  );
}
