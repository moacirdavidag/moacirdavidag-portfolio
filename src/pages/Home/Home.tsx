import React from "react";
import { useTheme } from "../../hooks/theme";
import { HomeWrapper } from "./style";
import Container from "../../components/Container";
import Header from "../../components/Header";

const Home = () => {
  const { theme } = useTheme();
  return <HomeWrapper $background={theme.colors.background} $secondaryBackground={theme.colors.secondaryBackground}>
    <Container>
        <Header />
    </Container>
  </HomeWrapper>;
};

export default Home;
