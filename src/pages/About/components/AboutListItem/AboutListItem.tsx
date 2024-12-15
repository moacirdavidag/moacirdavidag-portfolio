import { Box, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../hooks/theme";

type AboutListItemProps = {
    title: string;
    description: string | React.ReactNode;
    fontSize?: number;
    icon?: React.ReactNode
}

const AboutListItem = ({title, description, fontSize, icon}: AboutListItemProps) => {
  const { theme } = useTheme();

  return (
    <Stack
      width={"100%"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
        <Box width={"50%"} sx={{fontSize: fontSize ? `${fontSize}px` : "18px", fontWeight: 600, gap: "4px", display: "flex"}}>
            {icon ? icon : null} <span>{title}</span>
        </Box>
        <Box width={"50%"} sx={{fontSize: fontSize ? `${fontSize}px` : "18px"}}>
            {description}
        </Box>
    </Stack>
  );
};

export default AboutListItem;
