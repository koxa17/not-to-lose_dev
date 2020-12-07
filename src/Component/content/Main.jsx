import React, {Component} from 'react'
import {sortByField} from '../../utils'
import FormSearch from './FormSearch'
import ListLibraries from './ListLibraries'
import Title from './Title'

const LIBRARY = [
  {
    title: 'jquery',
    version: '3.2.0',
    couterClick: 123,
    href: './',
    desc: 'Популярная js библиотека для быcтрой работы с DOM деревом',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt a, itaque voluptatem incidunt reiciendis architecto eius, nulla aliquid illum minima aut corrupti nobis, voluptatibus corporis magni fugit ab cum.',
    keywords: [
      {
        name: 'CSS',
        color: '#2862e9',
      },
      {
        name: 'HTML',
        color: '#f16524',
      },
    ],
  },
  {
    title: 'bootstrap',
    version: '3.2.0',
    couterClick: 123,
    href: './',
    desc: 'Популярная js библиотека для быcтрой работы с DOM деревом',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt a, itaque voluptatem incidunt reiciendis architecto eius, nulla aliquid illum minima aut corrupti nobis, voluptatibus corporis magni fugit ab cum.',
    keywords: [
      {
        name: 'CSS',
        color: '#2862e9',
      },
      {
        name: 'HTML',
        color: '#f16524',
      },
    ],
  },
  {
    title: 'react',
    version: '16.3',
    couterClick: 356,
    href: './',
    desc:
      'Js библиотека от создателей FaceBook ,Js библиотека от создателей FaceBook, Js библиотека от создателей FaceBook',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt a, itaque voluptatem incidunt reiciendis architecto eius, nulla aliquid illum minima aut corrupti nobis, voluptatibus corporis magni fugit ab cum.',
    keywords: [
      {
        name: 'CSS',
        color: '#2862e9',
      },
      {
        name: 'JS',
        color: '#efd81d',
      },
    ],
  },
  {
    title: 'vue',
    version: '16.3',
    couterClick: 356,
    href: './',
    desc: 'Js библиотека от создателей FaceBook',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt a, itaque voluptatem incidunt reiciendis architecto eius, nulla aliquid illum minima aut corrupti nobis, voluptatibus corporis magni fugit ab cum.',
    keywords: [
      {
        name: 'CSS',
        color: '#2862e9',
      },
      {
        name: 'JS',
        color: '#efd81d',
      },
    ],
  },
]

let LibrarySorting = sortByField(LIBRARY, 'couterClick')

let ANIMATION_FINISHED = true

export default class Main extends Component {
  
  state = {
    focusForm: false,
    inputSeach: '',
  }

  titleRef = React.createRef()
  listRef = React.createRef()

  startAnimation() {
    ANIMATION_FINISHED = false 
  }

  finisherAnimation() {
    ANIMATION_FINISHED = true
  }

  // FIXME: баг с аниммацией, если кликнуть на инпут и резко рядом
  showListLibraries(e) {
    setTimeout(() => {
      this.setState({
        focusForm: true
      })
    }, 300) 
    if (ANIMATION_FINISHED === true) {
      // Анимация списка при фокусе инпута
      this.listRef.current.classList.add('show-list')
      this.listRef.current.classList.remove('hide-list')
      // Анимация заголовка о сайте при фокусе инпута 
      this.titleRef.current.classList.add('hide-about')
      this.titleRef.current.classList.remove('show-about')
    } else {
      return false
    }
  }

  hideListLibraries(e) {
    this.setState({
      focusForm: false
    })

    if (ANIMATION_FINISHED === true) {
      // Анимация списка при блуре инпута
      this.listRef.current.classList.remove('show-list')     
      this.listRef.current.classList.add('hide-list')    
      // Анимация заголовка о сайте при блуре инпута
      this.titleRef.current.classList.remove('hide-about')
      this.titleRef.current.classList.add('show-about')
    } else {
      return false
    }
  }

  handlerChangeInput(value) {
    this.setState({
      inputSeach: value
    })
  }

  render() {
    return (
      <section className="content">
        <div className="container">
          <Title refForTitle={this.titleRef} startAnimation={this.startAnimation.bind(this)} finisherAnimation={this.finisherAnimation.bind(this)} />
          <FormSearch
            focus={this.showListLibraries.bind(this)}
            blur={this.hideListLibraries.bind(this)}
            changeInput={this.handlerChangeInput.bind(this)}
            librarysLength={LIBRARY.length}
          />
          <ListLibraries librarys={LibrarySorting} refForList={this.listRef} focusesForm={this.state.focusForm}/>
        </div>
      </section>
    )
  }
}
