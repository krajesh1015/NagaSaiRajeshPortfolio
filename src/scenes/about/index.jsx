import {
  LeftSide,
  RightSide,
  RightSideContent,
  Row,
  SceneLayout,
} from "../../components/common/Layout";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import PageTitle from "./../../components/common/PageTitle";
import Divider from "./../../components/common/Divider";
import { technologies } from "./../../utils/tech";
import { colors } from "../../styles/colors";
import profile from "../../assets/profile/profile.png";

const About = ({ language, selectedPage }) => {
  const desktop = useMediaQuery("(min-width: 1279px)");
  return (
    <SceneLayout id="about">
      {desktop && (
        <RightSide>
          <RightSideContent>
            <img src={profile} alt="Beatriz Neaime" />
          </RightSideContent>
        </RightSide>
      )}
      <LeftSide>
        <PageTitle>{texts[language].about.title}</PageTitle>
        <Divider width={"30%"} />
        <p>
          {texts[language].about.text}{" "}
          <a href={texts[language].about.link} className="empresa">
            {texts[language].about.empresa}
          </a>
          {texts[language].about.text2}
        </p>
        <Row
          justify="flex-start"
          style={{
            margin: "1rem 0",
          }}
        >
          {technologies.map((tech, index) => (
            <Row key={index} width="max-content">
              <span
                style={{
                  color: colors.purple,
                }}
              >
                &#10148;
              </span>
              <p>{tech}</p>
            </Row>
          ))}
        </Row>
      </LeftSide>
    </SceneLayout>
  );
};

export default About;
