import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { Header, Icon, List, Dropdown } from "semantic-ui-react";

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
  const { user, isLoggedIn, logout } = useAuth();
  const links = [];

  if (isLoggedIn) {
    const trigger = (
      <span>
        <Icon name="user" /> Hello, {user.email}
      </span>
    );

    const options = [
      {
        key: "user",
        text: (
          <span>
            Signed in as <strong>{user.email}</strong>
          </span>
        ),
        disabled: true,
      },
      { key: "profile", text: "Your Profile", as: Link, to: "/profile" },
      { key: "widgetGenerator", text: "Widget Generator", as: Link, to: "/widgetGenerator" },
      { key: "sign-out", text: "Sign Out", onClick: () => logout() },
    ];
    return (
      <Dropdown
        trigger={trigger}
        options={options}
        pointing="top left"
        icon={null}
      />
    );
  } else {
    links.push({ text: "SIGN UP", to: "/signup" });
    links.push({ text: "LOGIN", to: "/login" });
  }
  return (
    <List horizontal>
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
          <img
            className="headerLogo"
            alt="Tent logo"
            src="/Icons/android-chrome-192x192.png"
          ></img>
          <h2 className="HeaderTitle">Tent Buddy</h2>
        </Link>
        <NavLinks />
      </div>
    </Header>
  );
}

export default Navbar;
