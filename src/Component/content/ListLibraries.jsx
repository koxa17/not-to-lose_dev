import React, {Component} from 'react'

function Card({librarys}) {
  return librarys.map(({title, version, couterClick, href, desc, keywords}, index) => {
    return (
      <li className="library-card" key={index + title}>
        <div className="title__card">
          <a href="./" className="link__card">
            {title} <span className="version__card">@ {version}</span>
          </a>
          <div className="rating__card">
            <img src="img/click.svg" alt="Посещений" />
            <span className="counter-click">{couterClick}</span>
          </div>
          <div className="library-asset-buttons">
            <a href={href} className="asset-button" data-title="Копировать ссылку">
              <img src="img/link-card.png" alt="Копировать ссылку" />
            </a>
            <a href="./" className="asset-button" data-title="Перейти по ссылке">
              <img src="img/go-to-link.png" alt="Перейти по ссылке" />
            </a>
          </div>
        </div>
        <ul className="keywords">
          <Keywords keywordsTag={keywords} />
        </ul>
        <p className="description__card">{desc}</p>
      </li>
    )
  })
}

function Keywords({keywordsTag}) {
  return keywordsTag.map(({name, color}, idx) => {
    return (
      <li className="keywords__item" key={idx + name} style={{backgroundColor: color}}>
        <a href="./">{name}</a>
      </li>
    )
  })
}

export default class ListLibraries extends Component {
  render() {
    let {librarys} = this.props
    return (
      <div className="row">
        <div className="col-12">
          <ul className="list-card">
            <Card librarys={librarys} />
          </ul>
        </div>
      </div>
    )
  }
}
