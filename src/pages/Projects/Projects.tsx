import React from "react";
import Header from "../../components/Header";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container";
import { useTheme } from "../../hooks/theme";

import painelPoder360 from "../../assets/img/eleicoesPoder360.jpg";
import urnaSIM from "../../assets/img/urnaSIM.jpeg";
import semiopop from "../../assets/img/semiopop.jpg";
import geojuazeiro from "../../assets/img/wp_geo_juazeiro.jpg";
import brasilsun from "../../assets/img/lp_brasil_sun.jpg";
import braforte from "../../assets/img/lp_braforte.jpg";
import { ProjectsWrapper } from "./style";
import { Link } from "react-router-dom";

const Projects = () => {
  const { theme } = useTheme();

  return (
    <ProjectsWrapper>
      <Header />
      <Container>
        <Stack width={"100%"} my={2}>
          <PageTitle title="Projetos" />
        </Stack>
        <Grid
          container
          width={"100%"}
          className="animate__animated animate__fadeInLeft"
        >
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                background: theme.colors.secondaryBackground,
                color: theme.colors.textPrimary,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={painelPoder360}
                  alt="Projeto Painel de Apuração das Eleições 2024 - Poder360"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Painel de Apuração das Eleições de 2024 - Jornal Poder360
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Participei como desenvolvedor front-end do projeto do painel
                    de apuração / resultados das eleições de 2024 do jornal
                    digital Poder360.
                    <br />
                    <strong>Tecnologias/Habilidades:</strong> React, Next.JS,
                    Consumo de API
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                background: theme.colors.secondaryBackground,
                color: theme.colors.textPrimary,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={urnaSIM}
                  alt="urnaSIM - Sistema eleitoral eletrônico feito com NodeJS"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Projeto urnaSIM
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Desenvolvi um sistema eleitoral eletrônico com NodeJs e
                    Express para uma escola pública da minha cidade, utilizada
                    em uma eleição de grêmio estudantil.
                    <br />
                    <strong>Tecnologias/Habilidades:</strong> NodeJS, Express,
                    JavaScript, Criação e Consumo de APIs, MongoDB / MongoDB
                    Atlas
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                background: theme.colors.secondaryBackground,
                color: theme.colors.textPrimary,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={semiopop}
                  alt="Semiopop - aplicativo mobile para estudantes de enfermagem e técnico de enfermagem"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    semiopop
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Aplicativo mobile que desenvolvi como bolsista no IFPB -
                    Campus Cajazeiras para digitalizar os processos operacionais
                    e ajudar os estudantes dos cursos de enfermagem e técnico de
                    enfermagem.
                    <br />
                    <strong>Tecnologias/Habilidades:</strong> React Native,
                    Desenvolvimento Mobile, Figma e UI/UX
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Stack
          width={"100%"}
          alignContent={"center"}
          justifyContent={"center"}
          my={2}
        >
          <Link
            to="https://github.com/moacirdavidag?tab=repositories"
            target="_blank"
          >
            <Button
              sx={{
                backgroundColor: theme.colors.primary,
                color: "#FFF",
                "&:hover": {
                  backgroundColor: theme.colors.secondaryBackground,
                },
              }}
            >
              Ver mais no meu GitHub
            </Button>
          </Link>
        </Stack>
      </Container>
      <Container>
        <Stack width={"100%"} my={2}>
          <PageTitle title="Freelancer" />
        </Stack>
        <Grid
          container
          width={"100%"}
          className="animate__animated animate__fadeInLeft"
        >
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                background: theme.colors.secondaryBackground,
                color: theme.colors.textPrimary,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={geojuazeiro}
                  alt="Portal da Escola GeoJuazeiro - Bahia"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Portal da escola GeoJuazeiro - Bahia
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Site Wordpress que criei para a escola GeoJuazeiro, do
                    estado da Bahia.
                    <br />
                    <strong>Tecnologias/Habilidades:</strong> Wordpress
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                background: theme.colors.secondaryBackground,
                color: theme.colors.textPrimary,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={brasilsun}
                  alt="Landing Page da Brasil Sun"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Landing Page Brasil Sun
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Landing Page desenvolvida para a Brasil Sun, uma empresa do
                    ramo de energia solar.
                    <br />
                    <strong>Tecnologias/Habilidades:</strong> HTML, CSS e
                    JavaScript
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 345,
                background: theme.colors.secondaryBackground,
                color: theme.colors.textPrimary,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={braforte}
                  alt="Landing Page Braforte"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Landing Page Braforte
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Landing Page criada para a empresa Braforte, do ramo de
                    segurança, e integrada a um Wordpress da empresa.
                    <br />
                    <strong>Tecnologias/Habilidades:</strong> HTML, CSS e
                    JavaScript
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Stack width={"100%"} my={2}>
            Você precisa de um aplicativo, site, blog ou landing page para
            mostrar seus serviços e conteúdos aos seus clientes?{" "}
            <strong>Fale comigo e conheça meus serviços.</strong>
            <Link to={"https://wa.me/5583988515604"} target="_blank">
              <Button
                sx={{
                  backgroundColor: theme.colors.primary,
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: theme.colors.secondaryBackground,
                  },
                  width: "max-content",
                  my: 2,
                }}
                onClick={() => {}}
              >
                Fale comigo
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Container>
    </ProjectsWrapper>
  );
};

export default Projects;
