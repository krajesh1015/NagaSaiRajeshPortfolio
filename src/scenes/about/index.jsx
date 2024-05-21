import { SceneLayout } from "../../components/common/Layout";

const About = ({ setSelectedPage, language, selectedPage }) => {
  return <SceneLayout id="about">{selectedPage}</SceneLayout>;
};

export default About;
