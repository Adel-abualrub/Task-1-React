import React from 'react'
import style from './contact.module.css'

export default function Contact() {
  return (
    <>
      <section className={`${style.contactSection}`}>
        <div className={`container`}>

          <h2 className={`${style.title} text-center`}>
            CONTACT ME
          </h2>

          <div className={`${style.divider}`}>
            <span className={`${style.line}`}></span>
            <i className={`fa-solid fa-star ${style.star}`}></i>
            <span className={`${style.line}`}></span>
          </div>

          <div className={`row justify-content-center`}>
            <div className={`col-md-8`}>

              <form>

                <div className={`${style.formGroup}`}>
                  <input
                    type="text"
                    className={`${style.input}`}
                    placeholder="Full name"
                  />
                </div>

                <div className={`${style.formGroup}`}>
                  <input
                    type="email"
                    className={`${style.input}`}
                    placeholder="Email address"
                  />
                </div>

                <div className={`${style.formGroup}`}>
                  <input
                    type="tel"
                    className={`${style.input}`}
                    placeholder="Phone number"
                  />
                </div>

                <div className={`${style.formGroup}`}>
                  <textarea
                    className={`${style.textarea}`}
                    placeholder="Message"
                  ></textarea>
                </div>

                <button type="submit" className={`${style.btn}`}>
                  Send
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
