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
  SectionText,
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
              <HeaderThree shouldBeTitle>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <Img src={p.images[0]} />
            <CardInfo className="card-info">
              {p.description.map((des, i) => {
                return <p key={i}> - {des} </p>;
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
                return <p key={i}>- {t}</p>;
              })}
            </div>
            <UtilityList>
              {p.visit && p.heroku && (
                <ExternalLinks href={p.visit} target="_blank">
                  Visit Site (May take time to Load)
                </ExternalLinks>
              )}

              {p.source && (
                <ExternalLinks href={p.source} target="_blank">
                  Source Code
                </ExternalLinks>
              )}
              {p.visit && !p.heroku && (
                <ExternalLinks href={p.visit} target="_blank">
                  Visit Site
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
