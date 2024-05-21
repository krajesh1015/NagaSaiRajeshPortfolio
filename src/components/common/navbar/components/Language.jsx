import styled from "styled-components";
import pt from "../../../../assets/svg/pt.svg";
import en from "../../../../assets/svg/en.svg";

const LanguageFlag = styled.img`
  cursor: pointer;
  height: 15px;
`;

const Language = ({ language, setLanguage }) => {
  return (
    <LanguageFlag
      src={language === "pt" ? pt : en}
      alt={language === "pt" ? "Português" : "English"}
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
    />
  );
};

export default Language;
