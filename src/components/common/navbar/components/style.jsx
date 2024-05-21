import styled from "styled-components";
import { fonts } from "./../../../../styles/fonts";

const Nav = styled.nav`
  width: 100%;
  background-color: #17072b;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 24px 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 83%;
`;

const NavBrand = styled.h4`
  font-size: 30px;
  line-height: 36px;
  color: #fff;
  font-family: ${fonts.poppins};
  font-weight: bold;
  cursor: pointer;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  font-family: ${fonts["source-code"]};
  font-size: 14px;
  font-weight: 600;
  text-transform: lowercase;
`;

export { Nav, NavContainer, NavBrand, NavLinkContainer };
