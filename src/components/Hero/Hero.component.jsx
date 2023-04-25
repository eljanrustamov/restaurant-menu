import React from "react";
import "./Hero.scss";
import HeroIMG from "../../assets/hero-background.jpg";

import lottieScroll from '../../assets/lotties/scroll-down.json'
import { Player } from '@lottiefiles/react-lottie-player';


const Hero = () => {


  return (
    <div className="hero-wrapper">
      <img src={HeroIMG} alt="bg" className="background" />
      <div className="hero-content">
        <h1 className="title">Welcome Back to <span>Eldorado</span> Restaurant</h1>
        <p className="subtitle">
          If you want to see our menu, please click "menu" button.
        </p>
      </div>

      <Player src={'https://assets5.lottiefiles.com/packages/lf20_o87tttfh.json'} loop autoplay className="scroll-animator"/>
    </div>
  );
};

export default Hero;
