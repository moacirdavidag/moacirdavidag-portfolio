import { Box, Stack } from "@mui/material";
import React from "react";

type AboutListItemProps = {
  title: string;
  description: string | React.ReactNode;
  fontSize?: number;
  icon?: React.ReactNode;
};

const AboutListItem = ({
  title,
  description,
  fontSize,
  icon,
}: AboutListItemProps) => {

  return (
    <Stack
      width={"100%"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        "@media screen and (max-width: 480px)": {
          fontSize: "10px",
        },
      }}
    >
      <Box
        width={"50%"}
        sx={{
          fontSize: fontSize ? `${fontSize}px` : "18px",
          fontWeight: 600,
          gap: "4px",
          display: "flex",
        }}
      >
        {icon ? icon : null} <span>{title}</span>
      </Box>
      <Box width={"50%"} sx={{ fontSize: fontSize ? `${fontSize}px` : "18px" }}>
        {description}
      </Box>
    </Stack>
  );
};

export default AboutListItem;
