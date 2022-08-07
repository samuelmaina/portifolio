import styled from "styled-components";

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
  width: 50%;
  height: 35%;
  left: 50%;
  margin-left: 33%;
  border-radius: 100%;
  object-fit: cover;
  overflow: hidden;
  @media screen and (max-width: 678px) {
     {
      margin-left: 25%;
    }
  }
`;
