import React, {Component} from 'react'
import IconSocial from './IconSocial'
import Menu from './Menu'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5 col-md-7 col-12 order-2 order-md-1">
              <div className="header__left">
                <div className="header__logo">
                  <img src="img/search.png" alt="Logo Search" className="img-logo" />
                  <a href="./">
                    <h1 className="header__logo-title mr-lg-4 mr-2">
                      <span>&lt;Not to</span> Lose <span>&gt;</span>
                    </h1>
                  </a>
                </div>
                <IconSocial />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-5 col-12 order-1 order-md-2 d-flex justify-content-end">
              <Menu />
            </div>
          </div>
        </div>
      </header>
    )
  }
}
