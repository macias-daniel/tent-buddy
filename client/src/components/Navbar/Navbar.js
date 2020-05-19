import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { Header, Icon, List } from "semantic-ui-react";

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  const links = [];
  if (isLoggedIn) {
    links.push({ text: "PROFILE", to: "/profile" });
    links.push({ text: "LOGOUT", onClick: () => logout() });
  } else {
    links.push({ text: "SIGN UP", to: "/signup" });
    links.push({ text: "LOGIN", to: "/login" });
  }
  return (
    <List horizontal >
      {links.map(link => (
        <List.Item className="placeholder">{createLink(link)}</List.Item>
      ))}
    </List>
  );
}

function Navbar() {
  return (
    <Header inverted textAlign="center" block>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h2 className="HeaderTitle">
            Tent Buddy 
            <Icon name="tree" />
          </h2>
        </Link>
        <NavLinks />
      </div>
    </Header>
  );
}

export default Navbar;
