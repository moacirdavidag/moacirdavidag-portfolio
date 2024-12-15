import Container from "../../components/Container";
import Header from "../../components/Header";
import {
  Box,
  Grid,
  Stack,
  useMediaQuery,
  useTheme as useThemeMUI,
} from "@mui/material";
import LinearProgress from "@mui/joy/LinearProgress";

import vetorDev from "../../assets/img/vetor_dev.png";
import { AboutMeDescription, AboutMeTitle, AboutWrapper } from "./style";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTheme } from "../../hooks/theme";
import AboutListItem from "./components/AboutListItem";

import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import JavascriptIcon from "@mui/icons-material/Javascript";
import StorageIcon from "@mui/icons-material/Storage";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BuildIcon from "@mui/icons-material/Build";
import LanguageIcon from "@mui/icons-material/Language";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import Footer from "../../components/Footer/Footer";
const About = () => {
  const { theme } = useTheme();
  const themeMUI = useThemeMUI();

  const isSmallScreen = useMediaQuery(themeMUI.breakpoints.down("sm"));

  const fontSize = isSmallScreen ? 12 : 14;

  return (
    <AboutWrapper>
      <Container>
        <Header />
        <Grid container width={"100%"} direction={{ xs: "column", sm: "row" }}>
          <Grid item sm={6}>
            <img
              src={vetorDev}
              alt="Ilustração de um programador em um computador"
              className="vetor-dev animate__animated animate__fadeInLeft"
              width={"100%"}
              height={"auto"}
            />
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            flexDirection={"column"}
            gap={"24px"}
            className="animate__animated animate__fadeInDown"
          >
            <PageTitle title="Sobre mim" />
            <AboutMeTitle $color={theme.colors.links}>
              Desenvolver sites e aplicativos com amor e qualidade é minha
              missão
            </AboutMeTitle>
            <AboutMeDescription>
              Sou o Moacir David, tenho 22 anos e sou{" "}
              <strong>apaixonado por tecnologia</strong>! Gosto sempre de
              aprender novas coisas e repassar meu conhecimento. Gosto de{" "}
              <strong>
                jogos 🎮 e instrumentos musicais 🎸 em meu tempo livre.
              </strong>
            </AboutMeDescription>
            <Stack direction={"column"} gap={"8px"}>
              <AboutListItem
                title="Nome:"
                description="Moacir David de Almeida Gonçalves"
                fontSize={fontSize}
              />
              <AboutListItem
                title="Idade:"
                description="22"
                fontSize={fontSize}
              />
              <AboutListItem
                title="Formação:"
                description="Tecnólogo em Análise e Desenvolvimento de Sistemas - IFPB Campus Cajazeiras"
                fontSize={fontSize}
              />
              <AboutListItem
                title="Nacionalidade:"
                description="Brasileiro"
                fontSize={fontSize}
              />
              <AboutListItem
                title="Idiomas:"
                description="Português (nativo, fluente); Inglês (conversação)"
                fontSize={fontSize}
              />
              <AboutListItem
                title="Disponível para Freelance:"
                description="Sim"
                fontSize={fontSize}
              />
              <AboutListItem
                title="Contato/WhatsApp:"
                description="+55 (83) 98851-5604"
                fontSize={fontSize}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          width={"100%"}
          my={4}
          direction={{ xs: "column", sm: "row" }}
        >
          <Grid item sm={6}>
            <PageTitle
              title="Minhas habilidades"
              fontSize={20}
              icon={<CodeIcon />}
            />
            <Stack
              direction={"column"}
              gap={"8px"}
              marginTop={4}
              paddingRight={2}
              className="animate__animated animate__fadeInLeft"
            >
              <AboutListItem
                title="JavaScript/NodeJs"
                fontSize={fontSize}
                icon={<JavascriptIcon />}
                description={<LinearProgress determinate value={100} />}
              />
              <AboutListItem
                title="React / React Native"
                fontSize={fontSize}
                icon={<CodeOffIcon />}
                description={<LinearProgress determinate value={90} />}
              />
              <AboutListItem
                title="Banco de Dados Relacional (MySQL) e MongoDB"
                fontSize={fontSize}
                icon={<StorageIcon />}
                description={<LinearProgress determinate value={80} />}
              />
              <AboutListItem
                title="Docker e práticas de CI/CD"
                fontSize={fontSize}
                icon={<BuildIcon />}
                description={<LinearProgress determinate value={70} />}
              />
              <AboutListItem
                title="Desenvolvimento Web"
                fontSize={fontSize}
                icon={<LanguageIcon />}
                description={<LinearProgress determinate value={100} />}
              />
              <AboutListItem
                title="Desenvolvimento Mobile"
                fontSize={fontSize}
                icon={<SmartphoneIcon />}
                description={<LinearProgress determinate value={80} />}
              />
              <AboutListItem
                title="Trabalho em equipe"
                fontSize={fontSize}
                icon={<GroupsIcon />}
                description={<LinearProgress determinate value={90} />}
              />
              <AboutListItem
                title="Comunicação"
                fontSize={fontSize}
                icon={<ChatBubbleIcon />}
                description={<LinearProgress determinate value={80} />}
              />
            </Stack>
          </Grid>
          <Grid
            item
            sm={6}
            alignItems={isSmallScreen ? "flex-start" : "flex-end"}
            justifyContent={isSmallScreen ? "flex-start" : "flex-end"}
            display={"flex"}
            flexDirection={"column"}
            my={isSmallScreen ? 2 : 0}
          >
            <PageTitle
              title="Experiências"
              fontSize={20}
              icon={<DescriptionIcon />}
            />
            <Box
              paddingLeft={2}
              width={"100%"}
              display={"flex"}
              alignItems={isSmallScreen ? "flex-start" : "flex-end"}
              justifyContent={isSmallScreen ? "flex-start" : "flex-end"}
            >
              <Timeline
                sx={{ width: "100%" }}
                className="animate__animated animate__fadeInRight"
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <strong>Desenvolvedor Full Stack</strong> | CEA Artes
                    Eletrônicas - Dezembro 2023 - Emprego atual
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <strong>Desenvolvedor Front-End</strong> | Jornal Poder360 -
                    Julho de 2024 à Outubro de 2024 - Projeto temporário das
                    eleições 2024
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>
                    <strong>Estagiário no Setor de Informática</strong> da
                    Prefeitura de Marizópolis - PB | Março de 2023 à Setembro de
                    2023
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </AboutWrapper>
  );
};

export default About;
