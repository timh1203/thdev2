export const slate = '#1d1e22'
export const gray = '#ababab'
export const white = '#f5f5f5'
export const purple = '#3333ff'
export const orange = '#ffcc00'

export const darkTheme = {
  textColor: white,
  backgroundColor: slate,
  yBorderColor: `2px solid ${gray}`,
  xBorderColor: `2px solid ${slate}`,
  separatorColor: `3px solid ${white}`,
  themeToggleButton: purple,
  imageShadow: `1px 1px 5px ${gray}`,
  buttonShadow: `1px 1px 5px ${purple}`,
}

export const lightTheme = {
  textColor: slate,
  backgroundColor: white,
  yBorderColor: `2px solid ${slate}`,
  xBorderColor: `2px solid ${white}`,
  separatorColor: `3px solid ${slate}`,
  themeToggleButton: orange,
  imageShadow: `1px 1px 5px ${slate}`,
  buttonShadow: `1px 1px 5px ${orange}`,
}

export const links = {
  github: {
    url: 'https://github.com/timh1203',
    alt: 'My Github',
  },
  linkedIn: {
    url: 'https://www.linkedin.com/in/timothyhoang/',
    alt: 'My LinkedIn',
  },
  twitter: {
    url: 'https://twitter.com/travelDev',
    alt: 'My Twitter',
  },
  medium: {
    url: 'https://medium.com/@timh1203',
    alt: 'My Medium',
  },
  freeCodeCamp: {
    url: 'https://www.freecodecamp.org/timh1203',
    alt: 'My Free Code Camp',
  },
  lambdaSchool: {
    url: 'https://lambdaschool.com/',
    alt: 'Lambda School Home',
  },
  chingu: {
    url: 'https://chingu.io/',
    alt: 'Chingu Home',
  },
  fccAshburn: {
    url: 'https://free-code-camp-ashburn.github.io/website/',
    alt: 'Free Code Camp Ashburn Home',
  },
  resume: {
    url:
      'https://docs.google.com/document/d/1vO5Ee5s1YYSpoAR3Ng5RQ-IoP3S6jpo3-ALeiYa2zZo/edit',
    alt: 'My Online Resume',
  },
  fccCertificate: {
    url: 'https://www.freecodecamp.org/timh1203/front-end-certification',
    alt: 'My Free Code Camp Certificate',
  },
  wdbcCertificate: {
    url: 'https://www.udemy.com/certificate/UC-F6RNIX9G/',
    alt: 'My Web Dev Bootcamp Certificate',
  },
  wanderlustoria: {
    demo: 'https://wanderlustoria.herokuapp.com/',
    github: 'https://github.com/timh1203/wanderlustoria',
    desc:
      'A travel content sharing platform with user authentication and google geocoder API coded with Node, Express, and MongoDB.',
  },
  simonGame: {
    demo: 'https://timh1203.github.io/simon-game',
    github: 'https://github.com/timh1203/simon-game',
    desc: 'https://timh1203.github.io/simon-game',
  },
  ticTacToe: {
    demo: 'https://timh1203.github.io/tictactoe-game',
    github: 'https://github.com/timh1203/tictactoe-game',
    desc:
      'An ubiquitous game playable against AI (MiniMax algorithm) or another player coded with ReactJS.',
  },
  dullesBarber: {
    demo: 'http://dullesbarber.com/',
    github: 'https://github.com/timh1203/dullesBarber',
    desc:
      'A barber shop business based in Sterling. Created GatsbyJS, GraphQL, and Styled Components.',
  },
}

export const skills = {
  frontEnd: [
    'JavaScript',
    'React',
    'Styled Components',
    'Redux',
    'Flexbox/CSS Grid',
    'GatsbyJS',
    'HTML/CSS',
    'Bootstrap',
  ],
  backEnd: [
    'NodeJS/Express',
    'REST/APIs',
    'SQL/PostgreSQL',
    'MongoDB',
    'Netlify',
    'Heroku',
    'Python/Django',
    'C',
  ],
  other: [
    'Git/Github',
    'Git Workflow',
    'Jest/Enzyme',
    'Yarn/NPM',
    'Auth0',
    'Stripe',
    'Mac OS X',
    'Wordpress',
  ],
}

// export const chartData = {
//   labels: [
//     "HTML/CSS",
//     "JavaScript",
//     "React/Redux",
//     "Node/Express",
//     "Python/Django",
//     "C",
//     "SQL",
//     "MongoDB",
//     "Traveling"
//   ],
//   datasets: [{
//     labels: ['Basic', 'Average', 'High', 'Ricktastic'],
//     data: [3, 3, 3, 2, 2, 1, 1, 1, 4],
//     backgroundColor: [
//       '#E44D26',
//       '#F5DC41',
//       '#61DAFB',
//       '#77AF63',
//       '#000000',
//       '#a0a0a0',
//       '#336791',
//       '#60BE86',
//       '#70A8E0'
//     ],
//     borderColor: [
//     ],
//     borderWidth: 1
//   }]
// }

// export const chartOptions = {
//   title: {
//     display: true,
//     position: "top",
//     text: 'Skills',
//     fontSize: '24',
//     fontFamily: 'Quicksand'
//   },
//   legend: {
//     display: false
//   },
//   tooltips: {
//     enabled: false
//   },
//   animation: {
//     duration: 2000,
//     easing: 'easeInOutQuad'
//   },
//   layout: {
//     padding: {
//       // top: 100,
//       right: 100,
//       // bottom: 100,
//       left: 100
//     },
//   },
//   scales: {
//     xAxes: [{
//       ticks: {
//         fontSize: 14,
//         fontFamily: 'Quicksand',
//       }
//     }],
//     yAxes: [{
//       ticks: {
//         fontSize: 14,
//         fontFamily: 'Quicksand',
//         beginAtZero: true,
//         min: 0,
//         max: 5,
//         callback: function (label) {
//           switch (label) {
//             case 0:
//               return `YDKJ (You Don't Know Jack)`;
//             case 1:
//               return 'Basic (Win some, lose some)';
//             case 2:
//               return 'Medium (Putting in the reps)';
//             case 3:
//               return 'High (I Haz Da Skillz)';
//             case 4:
//               return "Rick'tastic★";
//             default:
//               return null;
//           }
//         }
//       }
//     }]
//   }
// }

export const projectMainData = {
  guidr: {
    name: 'Guidr',
    desc:
      'Created during Lambda School Build Week, I led 5 other developers to build this app as the scrum master, committed code, and assisted in debugging. The technology stack includes ReactJS, NodeJS, and Sqlite3.',
    demo: 'https://guidr2.netlify.com/',
    github: 'https://github.com/guidr-app-lion-team',
  },
  wanderlustoria: {
    name: 'Wanderlustoria',
    desc:
      'A travel content sharing platform I made for travelers to share pictures amongst travelers. The technology stack includes NodeJS, ExpressJS, and MongoDB. App also includes user authentication and google geocoder API.',
    demo: 'https://wanderlustoria.herokuapp.com/',
    github: 'https://github.com/timh1203/wanderlustoria',
  },
  dullesBarber: {
    name: 'Dulles Barber',
    desc:
      'This site is home for an actual barber shop business based in Sterling, Virginia. The technology stack includes GatsbyJS, GraphQL, and Styled Components.',
    demo: 'http://dullesbarber.com/',
    github: 'https://github.com/timh1203/dullesBarber',
  },
  derikJones: {
    name: 'Derik Jones Architect Website',
    desc:
      'An architect portfolio website built for a client. The technology stack includes GatsbyJS, GraphQL, and Styled Components.',
    demo: 'http://derikjones.com/',
    github: 'https://github.com/timh1203/derikjones',
  }
}

export const projectAltData = {
  ticTacToeGame: {
    name: 'Tic Tac Toe',
    desc:
      'A well-known game for the Free Code Camp curriculum. This game is playable against AI (MiniMax algorithm) or another player. The technology used was ReactJS.',
    demo: 'https://timh1203.github.io/tictactoe-game',
    github: 'https://github.com/timh1203/tictactoe-game',
  },
  simonGame: {
    name: 'Simon Game',
    desc:
      'A memory sequence game for the Free Code Camp curriculum with instrument sounds and a keyboard play option. The technology used was ReactJS.',
    demo: 'https://timh1203.github.io/simon-game',
    github: 'https://github.com/timh1203/simon-game',
  },
  calculatorApp: {
    name: 'Calculator App',
    desc:
      'A simple calculator app to perform basic math operations for the Free Code Camp curriculum. The technology used was javascript.',
    demo: 'https://timh1203.github.io/calculator-app',
    github: 'https://github.com/timh1203/calculator-app',
  },
  respondezApp: {
    name: 'Remarkable Respondez App',
    desc:
      'A custom event app built for the Free Code Camp Group. The technology stack includes ReactJS and FireBase.',
    demo: 'https://timh1203.github.io/respondez-app/',
    github: 'https://github.com/timh1203/respondez-app',
  },
  pomodoroApp: {
    name: 'Phenomenal Pomodoro App',
    desc:
      'The work/break cycle app based on the Pomodoro Technique by by Francesco Cirillo. The app was for the Free Code Camp curriculum. The technology used was javascript.',
    demo: 'https://timh1203.github.io/pomodoro-app/',
    github: 'https://github.com/timh1203/pomodoro-app',
  },
  twitchApp: {
    name: 'Terrific Twitch App',
    desc:
      'A Twitch app displaying the channels streaming status from the Twitch API. The technology stack includes ReactJS and FireBase.',
    demo: 'https://timh1203.github.io/twitch-app/',
    github: 'https://github.com/timh1203/twitch-app',
  },
  wikipediaApp: {
    name: 'Witty Wikipedia App',
    desc:
      'A wikipedia app that displays a user search results or a random article from the WikiMedia API. The technology used was javascript.',
    demo: 'https://timh1203.github.io/wikipedia-app/',
    github: 'https://github.com/timh1203/wikipedia-app',
  },
  weatherApp: {
    name: 'Wonderful Weather App',
    desc:
      "A weather app that displays the weather forecast (24 hours, 48 hours, and 1 week) based on the user's IP location. The technologies used were javascript, Dark Sky API, and Skycons.",
    demo: 'https://timh1203.github.io/weather-app/',
    github: 'https://github.com/timh1203/weather-app',
  },
  photographySite: {
    name: 'Photography Website',
    desc:
      'A photography website that uses an API to pull pictures from instagram. The technologies used were javascript, Materialize, and InstafeedJS.',
    demo: 'https://timh1203.github.io/photo-site/',
    github: 'https://github.com/timh1203/photo-site',
  },
  turtleDash: {
    name: 'Turtle Dash Chrome Extension',
    desc:
      'A clone of the popular "Momentum Dash" Chrome Extension. This was a remote effort of remote developers from around the world as part of the Free Code Camp\'s Chingu-Voyage Group. The technologies used were javascript and jQuery.',
    demo:
      'https://chrome.google.com/webstore/detail/turtle-dash/odijnkiclhddnfdgnbjghchkhagnooek',
    github: 'https://github.com/chingu-voyage-turtles-2/turtle-dash',
  },
  quoteMachine: {
    name: 'Random Quote Machine',
    desc:
      'A random quote generator with randoms quotes from an API with the ability to share on Twitter and Facebook. The technologies used were javascript and jQuery.',
    demo: 'https://timh1203.github.io/quote-machine/',
    github: 'https://github.com/timh1203/quote-machine',
  },
  travelersChecklist: {
    name: "Traveler's Checklist",
    desc:
      'An app for the travler to make a packing list before a big trip. The technologies used were javascript and jQuery.',
    demo: 'https://timh1203.github.io/traveler-checklist/',
    github: 'https://github.com/timh1203/traveler-checklist',
  },
}
