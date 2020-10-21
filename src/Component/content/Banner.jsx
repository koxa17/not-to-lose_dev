import React, {Component} from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <p className="banner__title">Помощь поддержка &lt;Not to Lose&gt;</p>
        <p className="banner__paragraph">
          Вы можете внести свой <a href="/">вклад на GitHub</a>, чтобы сделать &lt;Not to
          Lose&gt; лучше! Свои отзывы присылайте на{' '}
          <a href="mailto:nik_html@mail.ru">nik_html@mail.ru</a> или пожертвуйте шейкелей
          на поддержку сайта.
        </p>
      </div>
    )
  }
}
