import styled from "styled-components";

export const Navbar = styled.nav`
  border-top: none;
  margin-bottom: 25px;
`;

export const NavContainer = styled.ul`
  margin: auto 0;

  @media (min-width: 1024px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg {
      max-width: 100%;
    }
  }

  .nav-link::before {
    bottom: -3px !important;
  }
`;
