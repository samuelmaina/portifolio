import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ExternalLinks } from "../Projects/ProjectsStyles";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    link: "https://www.hackerrank.com/certificates/d5328d82222b",
    text: "Intemediate JavaScript",
    org: "Hacker Rank",
    details:
      "It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.",
  },

  {
    link: "https://www.ratatype.com/u3056112/certificate/",
    text: "Fast Touch Typing",
    org: "RataType",
    details:
      " A certification for reaching a typing speed of 59 Words Per Minute. The test involved 250 words consisting of words, numbers and puntuation.",
  },
];

const Acomplishments = () => (
  <Section id="accomplishments">
    <SectionTitle>Certificates and Awards</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.text}`}</BoxNum>
          <BoxText>{card.org}</BoxText>
          <br />
          <p>{card.details}</p>
          <br />
          <ExternalLinks href={card.link} target="_blank">
            Show Credentials
          </ExternalLinks>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
