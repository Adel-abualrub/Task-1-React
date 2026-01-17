import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={`${style.footer}`}>
        <div className={`container`}>
          <div className={`row text-center`}>

            <div className={`col-md-4`}>
              <h4 className={`${style.title}`}>LOCATION</h4>
              <p className={`${style.text}`}>
                2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>

            <div className={`col-md-4`}>
              <h4 className={`${style.title}`}>AROUND THE WEB</h4>
              <p className={`${style.text}`}>
               
              </p>
            </div>

            <div className={`col-md-4`}>
              <h4 className={`${style.title}`}>ABOUT FREELANCER</h4>
              <p className={`${style.text}`}>
                Freelancer is a free to use, MIT licensed Bootstrap theme
                created by <span className={`${style.link}`}>Start Bootstrap</span>.
              </p>
            </div>

          </div>
        </div>
      </footer>

      <div className={`${style.copyRight}`}>
        <p>Copyright © Your Website 2024</p>
      </div>
    </>
  )
}
