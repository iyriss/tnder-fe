import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import * as S from "./NavHeader.styled";
import { LogoWrapper } from "../Login/styledcomponents/loginStyled.styled";
import ProfileIcon from "../../components/icons/ProfileIcon";

const logo = Logo();

const navLinkStyle = {
  marginRight: "40px",
  color: "#fff",
  fontSize: "24px",
  fontFamily: "Roboto Slab",
  fontWeight: "600",
  borderBottom: "2px solid #fff",
};

const NavHeader = () => {
  return (
    <S.NavContainer>
      <LogoWrapper>{logo}</LogoWrapper>
      <S.NavContainer>
        <NavLink
          to="/"
          className="nav-link"
          style={({ isActive }) =>
            isActive ? navLinkStyle : { ...navLinkStyle, borderBottom: "none" }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contracts"
          className="nav-link"
          style={({ isActive }) =>
            isActive ? navLinkStyle : { ...navLinkStyle, borderBottom: "none" }
          }
        >
          Contracts
        </NavLink>
        <NavLink
          to="/admin"
          className="nav-link"
          style={({ isActive }) =>
            isActive ? navLinkStyle : { ...navLinkStyle, borderBottom: "none" }
          }
        >
          Admin
        </NavLink>
        <ProfileIcon />
      </S.NavContainer>
    </S.NavContainer>
  );
};

export default NavHeader;
