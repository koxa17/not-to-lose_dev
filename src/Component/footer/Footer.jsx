import React, {Component} from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-3">
              <div className="footer__logo">
                <a href="./">
                  <span className="footer__logo-title">
                    <span>&lt;Not to</span> Lose <span>&gt;</span>
                  </span>
                </a>
                <div className="footer__wrapper">
                  <div className="foote__copyright">© 2020 Not to Lose.</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-3">
              <div className="footer__info">
                <ul className="info__list">
                  <p className="info__title">Социальные сети</p>
                  <li>
                    <a href="/">Вконтакте</a>
                  </li>
                  <li>
                    <a href="/">Телеграмм</a>
                  </li>
                  <li>
                    <a href="/">GitHub</a>
                  </li>
                  <li>
                    <a href="/">Мой сайт</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-3">
              <div className="footer__info">
                <ul className="info__list">
                  <p className="info__title">О нас</p>
                  <li>
                    <a href="/">Обо мне</a>
                  </li>
                  <li>
                    <a href="/">История</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-3">
              <div className="footer__info">
                <ul className="info__list">
                  <p className="info__title">Разное</p>
                  <li>
                    <a href="/">Стек технологий</a>
                  </li>
                  <li>
                    <a href="/">Планы на будущее</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
