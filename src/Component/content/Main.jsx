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
    title: 'react',
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

function toggleAnimate(node) {
  let title = node.current
  title.classList.toggle('is-search-focus')
  title.classList.toggle('is-search-blur')

  if (title.classList.contains('is-search-focus')) {
    setTimeout(() => {
      title.style.opacity = '0'
    }, 200)
  } else if (title.classList.contains('is-search-blur')) {
    title.style.opacity = '1'
  }
}

let LibrarySorting = sortByField(LIBRARY, 'couterClick')

export default class Main extends Component {
  state = {focusForm: false}
  titleRef = React.createRef()

  showListLibraries(e) {
    toggleAnimate(this.titleRef)
    this.setState({focusForm: true})
  }

  hideListLibraries(e) {
    toggleAnimate(this.titleRef)
    this.setState({focusForm: false})
  }

  render() {
    // let showList = this.state.focusForm

    return (
      <section className="content">
        <div className="container">
          <Title refForTitle={this.titleRef} />
          <FormSearch
            focus={this.showListLibraries.bind(this)}
            blur={this.hideListLibraries.bind(this)}
          />
          <ListLibraries librarys={LibrarySorting} />
        </div>
      </section>
    )
  }
}
