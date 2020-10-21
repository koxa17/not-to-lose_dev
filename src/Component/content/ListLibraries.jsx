import React, {Component} from 'react'
import Keywords from './Keywords'

function Card({ librarys }) {
  let popularLinks = librarys.slice(0, 3)
  return popularLinks.map(({ title, version, couterClick, href, desc, keywords }, index) => {
    return (<li className="library-card" key={index + title}>
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
    </li>)
  })
}



export default class ListLibraries extends Component {

  render() {
    let { librarys } = this.props
    let focusesForm = this.props.focusesForm
    return (
      <div className="row" ref={this.props.refForList}>
        <div className="col-12">
          <ul className="list-card">
            {focusesForm === true ? <Card librarys={librarys} /> : null}
          </ul>
        </div>
      </div>
    )
  }
}
