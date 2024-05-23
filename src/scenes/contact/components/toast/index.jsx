import styled from "styled-components";
import { colors } from "../../../../styles/colors";

const ToastContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;
  background-color: ${colors.pink};
  border-radius: 5px;
`;

const Toast = ({ type, language, code }) => {
  console.log(code);
};

export default Toast;
