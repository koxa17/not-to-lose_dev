import React, {Component} from 'react'

export default class Title extends Component {
  render() {
    return (
      <div className="row is-search-blur" ref={this.props.refForTitle}>
        <div className="col-12">
          <div className="introduction mb-4">
            <span className="introduction__header">&lt;Not to Lose&gt;</span>
            <span className="font-italic"> (или рус. не терять)</span> - идея сайта
            заключается в хранении полезной информации, ссылок на полезные ресурсы.
            Хранить кучи закладок в браузере, можно, но искать в них потом нужную закладку
            довольно не удобно!
          </div>
          <div className="description mb-5">
            <p className="description__paragraph">
              Для поиска нужной ссылки введите ее название или попробуйте поиск по
              ключевым словам! Если вы не нашли нужной информации, просто{' '}
              <a href="./">добавьте</a> что бы "не терять"!
            </p>
          </div>
        </div>
      </div>
    )
  }
}
