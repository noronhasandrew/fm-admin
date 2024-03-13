import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import styled from "styled-components";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 2rem auto;
`;

export default RootLayout;
