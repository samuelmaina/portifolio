import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <Img src={p.images[0]} />
            <CardInfo className="card-info">
              {p.description.map((des) => {
                return <p> - {des} </p>;
              })}
              <br />
            </CardInfo>
            <div>
              <TitleContent>Languages And Technologies</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <div>
              <TitleContent>Skills Demostrated (Learnt) </TitleContent>
              {p.skills.map((t, i) => {
                return <p>- {t}</p>;
              })}
            </div>
            <UtilityList>
              {p.visit && (
                <ExternalLinks href={p.visit} target="_blank">
                  View Site
                </ExternalLinks>
              )}
              {p.source && (
                <ExternalLinks href={p.source} target="_blank">
                  Source Code
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
