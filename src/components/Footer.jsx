import React from "react";
import "../assets/styles/Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      href: "#",
      imgSrc: "https://pngimg.com/d/tiktok_PNG2.png",
      alt: "TikTok",
    },
    {
      href: "#",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/600px-2023_Facebook_icon.svg.png?20231011122028",
      alt: "Facebook",
    },
    {
      href: "#",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png",
      alt: "Instagram",
    },
  ];

  return (
    <footer className="footer">
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <img src={link.imgSrc} alt={link.alt} />
          </a>
        ))}
      </div>
      <p>
        © 2024 <span>BINI</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
