import React, {Component} from 'react'

export default class Title extends Component {

  startAnimation() {
    this.props.startAnimation()
  }

  endAnimation() {
    this.props.finisherAnimation()
  }

  render() {
    return (
      <div className="row" ref={this.props.refForTitle} onAnimationStart={this.startAnimation.bind(this)} onAnimationEnd={this.endAnimation.bind(this)}>
        <div className="col-12">
          <div className="about-site">
            <div className="introduction mb-4">
              <span className="introduction__header ">&lt;Not to Lose&gt;</span>
              <span className="font-italic"> (или рус. не терять)</span> - идея сайта
              заключается в хранении полезной информации, ссылок на полезные ресурсы.
              Хранить кучи закладок в браузере, можно, но искать в них потом нужную закладку
              довольно не удобно!
            </div>
            <div className="description">
              <p className="description__paragraph">
                Для поиска нужной ссылки введите ее название или попробуйте поиск по
                ключевым словам! Если вы не нашли нужной информации, просто{' '}
                <a href="./">добавьте</a> что бы "не терять"!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
