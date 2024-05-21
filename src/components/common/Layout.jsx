import styled from "styled-components";

const Layout = styled.div`
  background-color: #17072b;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const SceneLayout = styled.div`
  width: 83%;
  margin: 0 auto;

  &:first-child {
    margin-top: 60px;
    height: calc(100vh - 50px);
  }

  @media screen and (min-width: 1060px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
  }
`;

export { Layout, SceneLayout };
