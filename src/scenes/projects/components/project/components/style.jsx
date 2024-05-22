import styled from "styled-components";
import { colors } from "../../../../../styles/colors";
import { fonts } from "../../../../../styles/fonts";

const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${colors.pink};
  width: 100%;
  height: 400px;
  padding: 10px;
  position: relative;

  .project-hover {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 40px;
    background-color: ${colors.blue};
    transition: all ease-in-out 0.3s;
    overflow: hidden;
    border-radius: 0 100px 10px 10px;

    &:hover {
      transition: all ease-in-out 0.5s;
      background-color: ${colors.purple};
      height: 100%;
      border-radius: 10px 100px 10px 10px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) =>
    props.src ? props.src : "https://via.placeholder.com/150"});
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-family: ${fonts["source-code"]};
  font-weight: 700;
  color: white;
  padding: 0.5rem 1rem;
  transition: all ease-in-out 0.5s;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  font-family: ${fonts.poppins};
  font-weight: 400;
  color: white;
  padding: 0.5rem 1rem;
  transition: all ease-in-out 0.5s;

  @media screen and (min-width: 1029px) {
    max-width: 70%;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export { ProjectCard, ProjectImage, ProjectTitle, ProjectDescription };
