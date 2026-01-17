import React from 'react'
import style from './Portfolio.module.css'
import ic1 from './../assets/imgs/proto/ic1.png'
import ic2 from './../assets/imgs/proto/ic2.png'
import ic3 from './../assets/imgs/proto/ic3.png'
import ic4 from './../assets/imgs/proto/ic4.png'
import ic5 from './../assets/imgs/proto/ic5.png'
import ic6 from './../assets/imgs/proto/ic6.png'

export default function Portfolio() {
  return (
    <>
      <section className={`${style.portfolioSection}`}>
        <div className={`container`}>

          <h2 className={`${style.title} text-center`}>
            PORTFOLIO
          </h2>

          <div className={`${style.divider}`}>
            <span className={`${style.line}`}></span>
            <i className={`fa-solid fa-star ${style.star}`}></i>
            <span className={`${style.line}`}></span>
          </div>

          <div className={`row g-4`}>

            <div className={`col-md-4`}>
              <div className={`${style.item}`}>
                <img src={ic1} className={`${style.img}`} alt="" />
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`${style.item}`}>
                <img src={ic2} className={`${style.img}`} alt="" />
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`${style.item}`}>
                <img src={ic3} className={`${style.img}`} alt="" />
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`${style.item}`}>
                <img src={ic4} className={`${style.img}`} alt="" />
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`${style.item}`}>
                <img src={ic5} className={`${style.img}`} alt="" />
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`${style.item}`}>
                <img src={ic6} className={`${style.img}`} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
