import styled from "styled-components";
import { colors } from "../../../../styles/colors";

const ToastContainer = styled.div`
  position: fixed;
  top: 2rem;
  right: -100%;
  padding: 1rem;
  background-color: ${colors.pink};
  border-radius: 5px;
  z-index: 99999999999;
  width: 20%;
  height: 60px;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Toast = ({ type, language, code }) => {
  return (
    <ToastContainer>
      {type === "success" && <p>{code}</p>}
      {type === "error" && <p>There was an error sending your message.</p>}
    </ToastContainer>
  );
};

export default Toast;
