import React, {Component} from 'react'

const linkSocial = [
  {
    img: 'img/telegram.png',
    link: 'https://web.telegram.org/@Koxa17',
    alt: 'Телеграм',
  },
  {
    img: 'img/vkontakte.png',
    link: 'https://vk.com/id71204174',
    alt: 'Вконтакте',
  },
  {
    img: 'img/github.png',
    link: 'https://github.com/koxa17',
    alt: 'GitHub',
  },
  {
    img: 'img/mySite.png',
    link: 'https://koxa17.github.io/myPortfolio/',
    alt: 'Мой Сайт',
  },
]

function Link(props) {
  let socialIcon = props.socialIcon

  return socialIcon.map((social, i) => {
    return (
      <a
        href={social.link}
        target={social.target || '_blank'}
        rel="noopener noreferrer"
        key={i + social.link}
        className="social-link">
        <abbr title={social.alt}>
          <img src={social.img} alt={social.alt} />
        </abbr>
      </a>
    )
  })
}

export default class IconSocial extends Component {
  render() {
    return (
      <address className="social-icon">
        <Link socialIcon={linkSocial} />
      </address>
    )
  }
}
