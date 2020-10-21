import React, {Component} from 'react'

export default class FormSearch extends Component {
  state = {
    inputLenght: false
  }

  inputSearch(e) {
    this.props.changeInput(e.target.value)
 
    if (e.target.value) {
      this.setState({
        inputLenght: true
      })
    } else {
      this.setState({
        inputLenght: false
      })
    }

  }

  render() {
    const librarysLength = this.props.librarysLength
    
    const inputLenght = this.state.inputLenght

    const btnSearch = <button type="submit" className="search-form__submit button__search">
    <img src="img/search-search.svg" alt="" />
    </button>

    const btnReset = <button type="reset" className="search-form__reset button__search">
    <img src="img/search-reset.svg" alt="" />
    </button>


    return (
      <div className="row">
        <div className="col-12">
          <form
            name="search-form"
            className="search-form"
            onFocus={this.props.focus}
            onBlur={this.props.blur}>
            <input
              type="search"
              name="search"
              id="search"
              value={this.inputValue}
              autoComplete="off"
              className="search-form__input"
              placeholder={'Поиск из ' + librarysLength + ' полезных ссылок...'}
              onChange={this.inputSearch.bind(this)}
            />
            {inputLenght ? btnReset : btnSearch}
          </form>
        </div>
      </div>
    )
  }
}
