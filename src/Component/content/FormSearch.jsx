import React, {Component} from 'react'

export default class FormSearch extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form
            name="search-form"
            className="search-form mb-2"
            onFocus={this.props.focus}
            onBlur={this.props.blur}>
            <input
              type="search"
              name="search"
              id="search"
              className="search-form__input"
              placeholder="Поиск из 1 200 полезных ссылок..."
            />
            <button type="submit" className="search-form__submit button__search">
              <img src="img/search-search.svg" alt="" />
            </button>
            <button type="reset" className="search-form__reset button__search">
              <img src="img/search-reset.svg" alt="" />
            </button>
          </form>
        </div>
      </div>
    )
  }
}
