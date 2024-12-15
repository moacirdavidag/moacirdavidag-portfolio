import styled from "styled-components";

interface AboutMeTitleProps {
    $color: string;
}

export const AboutWrapper = styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    height: 100%;
`;

export const AboutMeTitle = styled.p<AboutMeTitleProps>`
    font-size: 24px;
    font-weight: 800;
    color: ${({$color}) => $color};
`;

export const AboutMeDescription = styled.p`
    font-size: 16px;
`;