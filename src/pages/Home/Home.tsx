import React from "react";
import { useTheme } from "../../hooks/theme";
import { HomeProfileInfo, HomeWrapper } from "./style";
import Container from "../../components/Container";
import Header from "../../components/Header";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import MoacirDavid from "../../assets/img/moacir_david.png";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <HomeWrapper
      $background={theme.colors.background}
      $secondaryBackground={theme.colors.secondaryBackground}
      $color={theme.colors.textPrimary}
    >
      <Container>
        <Header />
        <HomeProfileInfo $border={theme.colors.borders}>
          <div className="photo-profile">
            <img
              src={MoacirDavid}
              alt="Moacir David"
              id="moacir-photo"
              className="animate__animated animate__fadeInDown"
            />
            <p className="name-title animate__animated animate__fadeInLeft">
              Oi, sou o{" "}
              <span style={{ color: theme.colors.links }}>Moacir David!</span>
              <br /> Sou Desenvolvedor Full Stack!
            </p>
            <p className="description animate__animated animate__fadeInLeft">
              Sou Desenvolvedor Full Stack com experiência e conhecimento nas
              tecnologias NodeJs, NestJs, React / React Native, PHP / Laravel,
              Bancos de Dados Relacionais (MySQL) e MongoDB, GraphQL, Docker e
              CI/CD.
            </p>
          </div>
          <div className="social-media animate__animated animate__fadeInLeft">
            <Link
              to="https://www.linkedin.com/in/moacir-david-7735b7158/"
              target="_blank"
            >
              <LinkedInIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transition: "300ms ease-in-out",
                    color: theme.colors.links,
                  },
                }}
              />
            </Link>
            <Link to="https://github.com/moacirdavidag/" target="_blank">
              <GitHubIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transition: "300ms ease-in-out",
                    color: theme.colors.links,
                  },
                }}
              />
            </Link>
            <Link to="https://wa.me/5583988515604" target="_blank">
              <WhatsAppIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transition: "300ms ease-in-out",
                    color: theme.colors.links,
                  },
                }}
              />
            </Link>
            <Link to="mailto:moacirdavidag@gmail.com" target="_blank">
              <EmailIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transition: "300ms ease-in-out",
                    color: theme.colors.links,
                  },
                }}
              />
            </Link>
          </div>
        </HomeProfileInfo>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
