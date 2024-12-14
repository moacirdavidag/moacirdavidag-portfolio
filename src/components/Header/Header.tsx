import React from "react";
import { HeaderButtons, HeaderWrapper, NavLinks } from "./style";
import { useTheme } from "../../hooks/theme";
import { Link, useNavigate } from "react-router-dom";

import ContrastIcon from "@mui/icons-material/Contrast";
import { Tooltip } from "@mui/material";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleNavigateApplication = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <HeaderWrapper>
      <div className="logo-div">
        <img src="" alt="Moacir David - Logo" id="logo" />
      </div>

      <NavLinks $color={theme.colors.textPrimary} $hover={theme.colors.links}>
        <ul>
          <li onClick={() => handleNavigateApplication("/")}>Home</li>
          <li onClick={() => handleNavigateApplication("/about")}>Sobre mim</li>
          <li onClick={() => handleNavigateApplication("/certificates")}>
            Certificados
          </li>
          <li onClick={() => handleNavigateApplication("/projects")}>
            Portfólio
          </li>
          <li onClick={() => handleNavigateApplication("/contact")}>Contato</li>
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

        <Link to={"https://wa.me/5583988515604"} target="_blank"><button>Fale comigo</button></Link>
      </HeaderButtons>
    </HeaderWrapper>
  );
};

export default Header;
