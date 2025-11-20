import React from 'react';

// Assets 
import LogoMarianaSilvaPurple from "../assets/logo-mariana-silva-purple.svg";
import LogoMarianaSilvaWhite from "../assets/logo-mariana-silva-white.svg";

const Logo = ({ color = 'purple', widthSrc='w-auto'}) => {

  return (
    <a href="/"> 
      <img 
        src={color === 'white' ? LogoMarianaSilvaWhite : LogoMarianaSilvaPurple} 
        alt="Mariana Silva Psicóloga Logo"
        className={`${widthSrc} h-auto`} 
      />
    </a>
  );
};

export default Logo;