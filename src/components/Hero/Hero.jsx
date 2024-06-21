import React from "react";
import hero from "../../assets/hero.svg";
import arrow from "../../assets/arrowBtn.svg";
import classes from "./Hero.module.css";

function Hero({ scrollToDiscover }) {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.hero__flexbox}>
          <div className={classes.hero__info}>
            <h1>Winter Vacation Trips</h1>
            <p>
              Enjoy your winter vacations with warmth and amazing sightseeing on
              the mountains. Enjoy the best experience with us!
            </p>
          </div>
          <div className={classes.hero__img}>
            <img src={hero} alt="Hero" />
          </div>
        </div>
        <button className={classes.hero__btn} onClick={scrollToDiscover}>
          <p>Let’s Go!</p>
          <img src={arrow} alt="Arrow" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
