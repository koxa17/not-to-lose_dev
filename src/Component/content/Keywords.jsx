import React, { Component } from 'react'

export default class Keywords extends Component {
    render() {
        const keywordsTag = this.props.keywordsTag
        return keywordsTag.map(({name, color}, idx) => {
            return (
              <li className="keywords__item" key={idx + name} style={{backgroundColor: color}}>
                <a href="./">{name}</a>
              </li>
            )
          })
    }
}
