import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 4rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media screen and (max-width: 940px) {
    .hamburger {
      display: block;
    }

    .nav {
      position: absolute;
      flex-direction: column;
      justify-content: start !important;
      top: 90px;
      left: -100%;
      width: 100%;
      height: 100vh;
      background-color: #000;
      transition: 0.3s;
    }

    .nav.active {
      left: 0;
    }

    .nav a {
      font-size: 1.4rem;
    }
    padding: 0rem;
    font-size: 1.2rem;
    row-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  height: 100%;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 95%;
    box-shadow: 10px rgba(80, 78, 78, 0.8);
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #ff347f;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.shouldBeTitle ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.div`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
    align-items: center;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
    margin: 10px 0;
  }
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
  margin: 5px 0;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 2rem;
  margin: 1rem 2rem;
`;
