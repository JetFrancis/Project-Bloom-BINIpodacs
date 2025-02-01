import React from "react";
import "../assets/styles/HeaderNav.css";

const HeaderNav = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Members", href: "#" },
    { label: "Discography", href: "#" },
    { label: "Fandom", href: "#" },
    { label: "Login", href: "#" },
  ];

  return (
    <nav>
      <div className="container">
        <div className="nav-links">
          {navItems.map((item, index) => (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
