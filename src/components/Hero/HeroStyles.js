import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-items: "flex-start";
  column-gap: 3rem;
  height: 50%;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: fit-content;
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    width: 100%;
    flex-direction: column;
  }
`;
export const DownLoadButton = styled.div`
  margin-top: 3rem;
  color: "white";
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60%;
    margin: auto;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  height: 45%;
  width: 50%;
  border-radius: 100%;
  object-fit: cover;
  overflow: hidden;
`;
