import React from "react";
import { CertificatesWrapper } from "./style";
import Header from "../../components/Header";
import {
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

import logoIrede from '../../assets/img/logo_irede.png';
import logoDio from '../../assets/img/logo_dio.png';
import logoIF from '../../assets/img/logo-ifpb.jpg';
import logoUdemy from '../../assets/img/logo_udemy.png';
import logoAtlantico from '../../assets/img/logo_avanti.png';

const Certificates = () => {
  const { theme } = useTheme();

  return (
    <CertificatesWrapper>
      <Header />
      <Container>
        <Stack width={"100%"} my={2}>
          <PageTitle title="Certificados" />
        </Stack>
        <Grid container width={"100%"} className="animate__animated animate__fadeInLeft">
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
                  image={logoDio}
                  alt="Logo Digital Innovation One"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bootcamp Html
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Bootcamp feito pela DIO que abordou as tecnologias iniciais do desenvolvimento web: HTML, CSS e JavaScript. Realizado em 2022.
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
                  image={logoAtlantico}
                  alt="Logo Instituto Atlântico"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bootcamp de Desenvolvimento Full Stack Avanti
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Bootcamp de Desenvolvimento Full Stack organizado pelo Avanti do Instituto Atlântico, que abordou tecnologias como NodeJs e Express no backend e React no frontend.
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
                  image={logoIrede}
                  alt="Logo IRede"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Banco de Dados
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Curso de Banco de Dados Relacionais no iRede, que abordou conceitos de modelagem de banco de dados, normalização de tabelas e uso de SGBDs.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
        </Grid>
        <Grid container width={"100%"} my={2} className="animate__animated animate__fadeInLeft">
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
                  image={logoUdemy}
                  alt="Logo Udemy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Web Design: Construa sites com PHP, HTML, CSS e JavaScript
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Curso de desenvolvimento web feito na plataforma Udemy, que abordou as tecnologias PHP, JavaScript, HTML e CSS
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
                  image={logoIF}
                  alt="Logo Instituto Federal da Paraíba"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Minicurso de GraphQL
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Ministrei sobre GraphQL no IV Sertão Comp - evento de computação do IFPB - Campus Cajazeiras
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
                  image={logoIF}
                  alt="Logo Instituto Federal da Paraíba"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Minicurso JavaScript básico
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.colors.textSecondary }}
                  >
                    Ministrei sobre a linguagem JavaScript e seus conceitos fundamentais, sintaxes e recursos no II Sertão Comp - evento de computação do IFPB - Campus Cajazeiras
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
        </Grid>
      </Container>
    </CertificatesWrapper>
  );
};

export default Certificates;
