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
  }
  ul li.link-active {
    border-bottom: 4px solid ${({ $linkColor }) => $linkColor};
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
`;
