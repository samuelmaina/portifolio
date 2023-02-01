import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

export default function Info() {
  return (
    <>
      <Section nopadding>
        <SectionTitle main center>
          Samuel Maina W.
          <br />
        </SectionTitle>
        <SectionText>
          -FullStack software engineer,well versed in
          JavaScript/TypeScript(React.js, Next.js, Node.js, Express), C++,Java,
          Python, SQL(Postgres and MySQL) and NoSQL databases(MongoDB).
        </SectionText>
        <SectionText>
          - Experienced in Agile methods (Scrum).Skilled in automated
          testing(Jest, JUnit) ,debugging, deployment and maintenance.
        </SectionText>
      </Section>
    </>
  );
}
