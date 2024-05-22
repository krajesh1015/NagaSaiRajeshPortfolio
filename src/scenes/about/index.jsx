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
import PDFViewer from "../../components/PDFViewer";
import { motion } from "framer-motion";

const About = ({ language, selectedPage }) => {
  const desktop = useMediaQuery("(min-width: 1279px)");

  const downloadPDF = (article) => {
    const link = document.createElement("a");
    link.href = article;
    link.download = language === "pt" ? "artigo.pdf" : "article.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PageTitle>{texts[language].about.title}</PageTitle>
        </motion.div>
        <Divider width={"30%"} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p>
            {texts[language].about.text}{" "}
            <a href={texts[language].about.link} className="empresa">
              {texts[language].about.empresa}
            </a>
            {texts[language].about.text2}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Row
            justify="flex-start"
            style={{
              margin: "1.5rem 0",
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
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.9 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p style={{ marginTop: "1rem" }}>{texts[language].about.text3}</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PDFViewer onClick={() => downloadPDF(texts[language].about.article)}>
            <i class="fa-regular fa-file-pdf"></i> PDF
          </PDFViewer>
        </motion.div>
      </LeftSide>
    </SceneLayout>
  );
};

export default About;
