import { SceneLayout } from "../../components/common/Layout";
import {
  LandingLeftSide,
  LandingRightSide,
  RightSideContent,
} from "./components/style";
import { motion } from "framer-motion";
import { texts } from "./../../utils/texts";
import profile from "./../../assets/svg/profile.svg";

const Home = ({ setSelectedPage, language, selectedPage }) => {
  return (
    <SceneLayout className="md" id="home">
      <LandingRightSide>
        <RightSideContent>
          <img src={profile} alt="Landing" />
        </RightSideContent>
      </LandingRightSide>
      <LandingLeftSide>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1>{`<Beatriz Neaime/>`}</h1>
          <p>{texts[language].landing.subtitle}</p>
        </motion.div>
      </LandingLeftSide>
    </SceneLayout>
  );
};

export default Home;
