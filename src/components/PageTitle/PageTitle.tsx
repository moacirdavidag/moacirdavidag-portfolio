import React from "react";
import { useTheme } from "../../hooks/theme";
import { Stack } from "@mui/material";

type PageTitleProps = {
  title: string;
  fontSize?: number;
  icon?: React.ReactNode;
};

const PageTitle = ({ title, fontSize, icon }: PageTitleProps) => {
  const { theme } = useTheme();
  return (
    <Stack
      style={{
        width: "max-content",
        color: theme.colors.textPrimary,
        borderBottom: `4px solid ${theme.colors.hover}`,
        paddingBottom: "4px",
      }}
    >
      <h2
        style={{
          fontSize: fontSize ? fontSize : "24px",
          display: "flex",
          alignItems: "center",
          gap: "4px"
        }}
      >
        {icon ? icon : null} {title}
      </h2>
    </Stack>
  );
};

export default PageTitle;
