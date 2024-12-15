import styled from "styled-components";

interface HomeWrapperProps {
  $background: string;
  $secondaryBackground: string;
  $color: string;
}

interface HomeProfileProps {
  $border: string;
}

export const HomeWrapper = styled.main<HomeWrapperProps>`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: ${({ $background, $secondaryBackground }) =>
    `linear-gradient(to bottom, ${$secondaryBackground}, ${$background})`};
  color: ${({ $color }) => $color};
  a,
  a:visited {
    color: ${({ $color }) => $color};
  }
`;

export const HomeProfileInfo = styled.section<HomeProfileProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 24px;

  div.photo-profile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    img {
      width: 250px;
      height: auto;
      border-radius: 50%;
      border: 6px solid ${({ $border }) => $border};
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.07);
      @media screen and (max-width: 480px) {
        width: 150px;
      }
    }
    p.name-title {
      margin-top: 16px;
      font-size: 24px;
      font-weight: 600;
    }
    p.description {
      width: 50%;
      margin-top: 16px;
      font-size: 16px;
      @media screen and (max-width: 480px) {
        width: 100%;
      }
    }
  }
  div.social-media {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 4px;
    border: 2px solid ${({ $border }) => $border};
  }
`;
