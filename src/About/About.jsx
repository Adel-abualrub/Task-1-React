import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <>
      <section className={`${style.aboutSection}`}>
        <div className={`container`}>

          <h2 className={`${style.title} text-center`}>
            ABOUT
          </h2>

          <div className={`${style.divider}`}>
            <span className={`${style.line}`}></span>
            <i className={`fa-solid fa-star ${style.star}`}></i>
            <span className={`${style.line}`}></span>
          </div>

          <div className={`row justify-content-center`}>

            <div className={`col-md-4`}>
              <p className={`${style.text}`}>
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            <div className={`col-md-4`}>
              <p className={`${style.text}`}>
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>

          </div>

          <div className={`text-center mt-4`}>
            <button className={`${style.btn}`}>
              <i className={`fa-solid fa-download me-2`}></i>
              Free Download!
            </button>
          </div>

        </div>
      </section>
    </>
  )
}
