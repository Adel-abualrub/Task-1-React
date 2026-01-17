import React from 'react'
import style from './hero.module.css'
import HeroImg from './../assets/imgs/heroImg/PrImg.svg'

export default function Hero() {
  return (
    <>
      <section className={`${style.heroSection}`}>
        <div className={`container text-center`}>

          <img
            src={HeroImg}
            alt="hero"
            className={`${style.heroImg}`}
          />

          <h1 className={`${style.heroTitle}`}>
            START BOOTSTRAP
          </h1>

          <div className={`${style.divider}`}>
            <span className={`${style.line}`}></span>
            <i className={`fa-solid fa-star ${style.star}`}></i>
            <span className={`${style.line}`}></span>
          </div>

          <p className={`${style.heroText}`}>
            Graphic Artist - Web Designer - Illustrator
          </p>

        </div>
      </section>
    </>
  )
}
