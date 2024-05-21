import { useState } from "react";
import useMediaQuery from "./../../../hooks/useMediaQuery";
import Link from "./components/Link";
import {
  Nav,
  NavBrand,
  NavContainer,
  NavLinkContainer,
} from "./components/style";
import Language from "./components/Language";

const Navbar = ({ selectedPage, setSelectedPage, language, setLanguage }) => {
  const [menuToggled, setMenuToggled] = useState(false);
  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <Nav>
      <NavContainer>
        <NavBrand>{"<BN/>"}</NavBrand>
        {desktop && (
          <NavLinkContainer>
            <Link
              page="home"
              label={language === "pt" ? "início" : "home"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Link
              page="about"
              label={language === "pt" ? "sobre" : "about"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Link
              page="skills"
              label={language === "pt" ? "habilidades" : "skills"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Link
              page="projects"
              label={language === "pt" ? "projetos" : "projects"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Link
              page="contact"
              label={language === "pt" ? "contato" : "contact"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuToggled={setMenuToggled}
            />
            <Language language={language} setLanguage={setLanguage} />
          </NavLinkContainer>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
