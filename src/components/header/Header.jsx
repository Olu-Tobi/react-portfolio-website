import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import me2 from "../../assets/me2.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hi </h4>
        <h1 style={{ textAlign: "center" }}>I'm Tobi Daramola</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
