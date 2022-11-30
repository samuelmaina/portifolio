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
    link: "https://devpost.com/samuelmaina/challenges",
    text: "MLH Orientation Hackathon Winner",
    org: "Major League Hacking",
    details:
      "Teamed up with an Amazon intern and Indian SWE and created an application for Minting NFTs on Solana network using node.js, Next.js and Smart Contracts.",
  },
  {
    link: "https://www.hackerrank.com/certificates/d5328d82222b",
    text: "Intemediate JavaScript",
    org: "Hacker Rank",
    details:
      "Certificate covers and tests on topics like Design Patterns, Memory management, concurrency model, and event loops, among others.",
  },

  {
    link: "https://devpost.com/samuelmaina/challenges",
    text: "Luna Hacks Hackathon Winner",
    org: "Google Developers Student Club, GitHub and Microsoft",
    details:
      "Emerged top at the expert category in the Luna Fest Hackathon held by GDSC Moi University in conjunction with Microsoft and Github. Hackathon involved use of GitHub workflows to automate Azure operations such as app deployment and teardown",
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
