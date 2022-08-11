import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Section, SectionTitle } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import { ListTitle } from "../Technologies/TechnologiesStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Section id="contact-me">
      <FooterWrapper>
        <SectionTitle> Contact Me </SectionTitle>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel: +254711516786">
              <span>+254</span>
              <span> 711</span>
              <span> 516</span>
              <span> 786</span>
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:samuelmayna@gmail.com">
              samuelmayna@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>The way to go fast is to go well.</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/samuelmaina" target="_blank">
              <AiFillGithub size="4rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.linkedin.com/in/samuel-maina-339a431a1/"
              target="_blank"
            >
              <AiFillLinkedin size="4rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
