const API_URL = 'https://api.chucknorris.io/jokes/random'

const IMAGE = 'https://via.placeholder.com/200x150'

const MY_PROJECTS = [
  {
    name: 'freeCodeCamp Javascript algorithms and data structure certification',
    description:
      'In order to complete and earn the certification, I had to resolve lots of algorithms. You can have a look on it on my github with these following links.',
    stack: 'Vanilla Javascript',
    link: 'https://gist.github.com/Ovicakov/338234f4087e5f078033ba73b5295ae8',
    image: `${IMAGE}`,
  },
  {
    name: 'Le mec à vélo',
    description:
      'As part of my web developer career change, I had the opportunity to take the web and web mobile certification (RNCP, Bac +2). To get this diploma, I made a personal project for a friend which has create his own company.',
    stack: 'Javascript, React, CSS, Node.js, Express, mySQL',
    link: 'https://github.com/Ovicakov/LeMecAVelo',
    image: `${IMAGE}`,
  },
  {
    name: 'This portfolio',
    description: 'The website that you are having a look !',
    stack: 'React, JavaScript, TypeScript, styled-components',
    link: 'https://github.com/Ovicakov/my-portfolio',
    image: `${IMAGE}`,
  },
  {
    name: 'Other algorithms',
    description:
      'Sometimes, I like spending time to practice algorithms I saw, or reproduce the ones that we could find on ramda.',
    stack: 'Vanilla Javascript',
    link: 'https://gist.github.com/Ovicakov/c5a51a04688455907fdfef0ca638c664',
    image: `${IMAGE}`,
  },
]

export { API_URL, MY_PROJECTS }
