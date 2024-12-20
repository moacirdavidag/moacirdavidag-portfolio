import { useState } from "react";
import { HeaderButtons, HeaderWrapper, MobileMenu, NavLinks } from "./style";
import { useTheme } from "../../hooks/theme";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ContrastIcon from "@mui/icons-material/Contrast";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, Tooltip } from "@mui/material";

import Logo from "../../assets/img/MD_LOGO_TRANSPARENTE.png";
import LogoEscuro from "../../assets/img/MD_LOGO_TRANSPARENTE_ESCURO.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigateApplication = (route: string) => {
    navigate(`${route}`);
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <div className="logo-div">
        <img
          src={theme.name === "lightTheme" ? LogoEscuro : Logo}
          alt="Moacir David - Logo"
          id="logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <NavLinks
        $color={theme.colors.textPrimary}
        $hover={theme.colors.links}
        $linkColor={theme.colors.links}
      >
        <ul>
          <li
            className={location.pathname === "/" ? "link-active" : ""}
            onClick={() => handleNavigateApplication("/")}
          >
            Home
          </li>
          <li
            className={location.pathname === "/about" ? "link-active" : ""}
            onClick={() => handleNavigateApplication("/about")}
          >
            Sobre mim
          </li>
          <li
            className={
              location.pathname === "/certificates" ? "link-active" : ""
            }
            onClick={() => handleNavigateApplication("/certificates")}
          >
            Certificados
          </li>
          <li
            className={location.pathname === "/projects" ? "link-active" : ""}
            onClick={() => handleNavigateApplication("/projects")}
          >
            Portfólio
          </li>
          {/* <li
            className={location.pathname === "/contact" ? "link-active" : ""}
            onClick={() => handleNavigateApplication("/contact")}
          >
            Contato
          </li> */}
        </ul>
      </NavLinks>

      <HeaderButtons
        $background={theme.colors.primary}
        $color={theme.colors.textPrimary}
        $backgroundHover={theme.colors.hover}
        $hover={theme.colors.textPrimary}
      >
        <Tooltip
          title={`Alternar para tema ${
            theme.name === "lightTeme" ? "escuro" : "claro"
          }`}
          sx={{ cursor: "pointer" }}
          onClick={toggleTheme}
        >
          <ContrastIcon
            sx={{
              cursor: "pointer",
              color: theme.colors.textPrimary,
              "&:hover": {
                color: theme.colors.textSecondary,
              },
            }}
          />
        </Tooltip>

        <Link to={"https://wa.me/5583988515604"} target="_blank">
          <button>Fale comigo</button>
        </Link>

        <MenuIcon
          sx={{
            display: "none",
            cursor: "pointer",
            "@media screen and (max-width: 480px)": {
              display: "block",
            },
          }}
          onClick={() => setIsMenuOpen(true)}
        />
      </HeaderButtons>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <MobileMenu
          $color={theme.colors.textPrimary}
          $hover={theme.colors.links}
          $linkColor={theme.colors.links}
        >
          <CloseIcon
            className="close-icon"
            onClick={() => setIsMenuOpen(false)}
          />
          <ul>
            <li
              className={location.pathname === "/" ? "link-active" : ""}
              onClick={() => handleNavigateApplication("/")}
            >
              Home
            </li>
            <li
              className={location.pathname === "/about" ? "link-active" : ""}
              onClick={() => handleNavigateApplication("/about")}
            >
              Sobre mim
            </li>
            <li
              className={
                location.pathname === "/certificates" ? "link-active" : ""
              }
              onClick={() => handleNavigateApplication("/certificates")}
            >
              Certificados
            </li>
            <li
              className={location.pathname === "/projects" ? "link-active" : ""}
              onClick={() => handleNavigateApplication("/projects")}
            >
              Portfólio
            </li>
          </ul>
        </MobileMenu>
      </Drawer>
    </HeaderWrapper>
  );
};

export default Header;
