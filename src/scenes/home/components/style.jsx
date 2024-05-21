import styled from "styled-components";
import { fonts } from "./../../../styles/fonts";
import { colors } from "./../../../styles/colors";

const LandingRightSide = styled.div`
  flex-basis: 60%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1060px) {
    order: 2;
    width: 100vh;
  }
`;

const RightSideContent = styled.div`
  img {
    z-index: 9999;
    position: relative;
  }

  @media screen and (min-width: 1060px) {
    &::before {
      max-width: 400px;
    }

    img {
      max-width: 350px;
    }
  }
`;

const LandingLeftSide = styled.div`
  z-index: 99999999;

  h1 {
    font-size: 60px;
    line-height: 60px;
    font-family: ${fonts.poppins};
    color: ${colors.purple};
    text-align: center;
    font-weight: 400;
    word-wrap: break-word;
    z-index: 10;
  }

  p {
    font-family: ${fonts["source-code"]};
    font-size: 14px;
    text-align: center;
    margin-top: 25px;
  }

  @media screen and (min-width: 1060px) {
    flex-basis: 40%;
    order: 1;

    h1 {
      text-align: start;
    }

    p {
      text-align: start;
    }
  }
`;

export { LandingRightSide, RightSideContent, LandingLeftSide };
