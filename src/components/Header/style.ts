import styled from "styled-components";

interface NavLinksProps {
  $color: string;
  $hover?: string;
  $isLinkActive?: boolean;
  $linkColor?: string;
}

interface ButtonCtaProps {
  $background: string;
  $color: string;
  $backgroundHover: string;
  $hover: string;
}

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 24px;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
    padding: 16px;
  }

  #logo {
    max-width: 100px;
    height: auto;
    cursor: pointer;
  }
`;

export const NavLinks = styled.nav<NavLinksProps>`
  display: inline-block;
  color: ${({ $color }) => $color};

  ul {
    display: flex;
    gap: 24px;

    @media screen and (min-width: 481px) and (max-width: 768px) {
      gap: 8px;
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  li {
    list-style: none;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      transition: 300ms ease-in-out;
      color: ${({ $hover }) => $hover};
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      font-size: 14px;
    }
  }

  ul li.link-active {
    border-bottom: 4px solid ${({ $linkColor }) => $linkColor};
    padding-bottom: 4px;
  }
`;

export const HeaderButtons = styled.div<ButtonCtaProps>`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    padding: 12px;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: #fff;
    background: ${({ $background }) => $background};

    &:hover {
      transition: 300ms ease-in-out;
      background: ${({ $backgroundHover }) => $backgroundHover};
    }
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }
`;

export const MobileMenu = styled.div<NavLinksProps>`
  width: 250px;
  height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ $color }) => $color};

  ul {
    list-style: none;
    padding: 0;

    li {
      width: max-content;
      padding: 12px 0;
      font-size: 18px;
      cursor: pointer;
      font-weight: 600;

      &:hover {
        color: ${({ theme }) => theme.colors.links};
        transition: 300ms ease-in-out;
      }
    }
  }
  ul li.link-active {
    border-bottom: 4px solid ${({ $linkColor }) => $linkColor};
    padding-bottom: 4px;
  }
  .close-icon {
    align-self: flex-end;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 16px;
  }
`;
