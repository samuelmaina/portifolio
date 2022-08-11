import React from "react";
import {
  DiReact,
  DiCss3,
  DiResponsive,
  DiZend,
  DiHtml5,
  DiJavascript1,
  DiJava,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiScrum,
} from "react-icons/di";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
const iconSize = "10rem";
const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Have worked with a veriety of languages.Have written automated tests in
      most of them.
    </SectionText>
    <List>
      <ListItem>
        <ListTitle>Front-End</ListTitle>
        <picture>
          <DiReact size={iconSize} />
          <DiJavascript1 size={iconSize} />
          <DiCss3 size={iconSize} />
        </picture>

        <picture>
          <DiHtml5 size={iconSize} />
          <DiResponsive size={iconSize} />
        </picture>
      </ListItem>
      <ListItem>
        <ListTitle>Back-End</ListTitle>
        <picture>
          <DiNodejs size={iconSize} />
          {<span style={{ fontSize: "7rem" }}> C++</span>}
          <DiJava size={iconSize} />
          <DiPython size={iconSize} />
          <DiMongodb size={iconSize} />
          <DiPostgresql size={iconSize} />
          <DiMysql size={iconSize} />
        </picture>
      </ListItem>

      <ListItem>
        <ListTitle>Agile Methodologies</ListTitle>
        <picture>
          <DiScrum size={iconSize} />
          <ListParagraph>Scrum</ListParagraph>
        </picture>
      </ListItem>

      <ListItem>
        <ListTitle>AI, Machine Learning and Data Science</ListTitle>
        <picture>
          <DiPython size={iconSize} />
        </picture>
        <ListContainer>
          <ListParagraph>
            Experienced in: <br />
            -Machine Learning arigorithms- regression, clustering, training
            <br />
            -Data Science : cleaning and analysis
            <br />
            -Data visualization. <br />
            -Spark <br />
            -Hadoop <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListTitle>UI/UX</ListTitle>
        <picture>
          <DiZend size={iconSize} />
        </picture>
        <ListContainer>
          <ListParagraph>
            Experienced with: <br />
            -Figma in UI/UX design
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
