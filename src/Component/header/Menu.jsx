import React, {Component} from 'react'

export default class Menu extends Component {
  render() {
    return (
      <nav>
        <ul className="menu">
          <li className="menu__item">
            <a href="./">Контакты</a>
          </li>
          <li className="menu__item">
            <a href="./">Библиотека</a>
          </li>
          <li className="menu__item">
            <a href="./">Добавить</a>
          </li>
        </ul>
      </nav>
    )
  }
}
