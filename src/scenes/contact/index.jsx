import { SceneLayout } from "../../components/common/Layout";

const Contact = ({ setSelectedPage, language, selectedPage }) => {
  return (
    <SceneLayout className="md" id="contact">
      {selectedPage}
    </SceneLayout>
  );
};

export default Contact;
