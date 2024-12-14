import styled from "styled-components";

interface HomeWrapperProps {
  $background: string;
  $secondaryBackground: string;
}

export const HomeWrapper = styled.main<HomeWrapperProps>`
  width: 100vw;
  height: 100vh;
  background: ${({ $background, $secondaryBackground }) =>
    `linear-gradient(to bottom, ${$secondaryBackground}, ${$background})`};
`;
