export const slate = '#1d1e22'
export const gray = '#ababab'
export const white = '#f5f5f5'
export const purple = '#3333ff'
export const orange = '#ffcc00'
export const teal = '#8bd8bd'
export const forest = '#295f2d'
export const sky = '#8aaae5'
export const metallic = '#585858'

export const darkTheme = {
  textColor: white,
  backgroundColor: slate,
  yBorderColor: `2px solid ${gray}`,
  xBorderColor: `2px solid ${slate}`,
  separatorColor: `3px solid ${white}`,
  imageShadow: `1px 1px 5px ${gray}`,
  buttonShadow: `1px 1px 5px ${teal}`,
  themeToggleButton: teal,
  buttonBackground: metallic,
  buttonBorder: teal,
  underlineColor: teal,
  socialIconColor: white,
}

export const lightTheme = {
  textColor: slate,
  backgroundColor: white,
  yBorderColor: `2px solid ${slate}`,
  xBorderColor: `2px solid ${white}`,
  separatorColor: `3px solid ${slate}`,
  themeToggleButton: sky,
  imageShadow: `1px 1px 5px ${slate}`,
  buttonBackground: metallic,
  buttonShadow: `1px 1px 5px ${sky}`,
  underlineColor: sky,
  socialIconColor: slate,
}

export const links = {
  github: {
    url: 'https://github.com/timh1203',
    alt: 'My Github',
  },
  linkedIn: {
    url: 'https://www.linkedin.com/in/timothyhoang',
    alt: 'My LinkedIn',
  },
  twitter: {
    url: 'https://twitter.com/timothyhoangdev',
    alt: 'My Twitter',
  },
  youtube: {
    url: 'https://www.youtube.com/channel/UC20f70HjfOSYUk725xid1XQ',
    alt: 'My Youtube',
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
    url: 'https://lambdaschool.com',
    alt: 'Lambda School Home',
  },
  chingu: {
    url: 'https://chingu.io',
    alt: 'Chingu Home',
  },
  fccAshburn: {
    url: 'https://free-code-camp-ashburn.github.io/website',
    alt: 'Free Code Camp Ashburn Home',
  },
  resume: {
    url: 'https://resume.creddle.io/resume/9f4autrrf1v',
    alt: 'My Online Resume',
  },
  lambdaBadge: {
    url:
      'https://www.youracclaim.com/badges/3d1bd32a-e3fa-4b65-be51-217058ff0ab6/public_url',
    alt: 'My Lambda School Badge',
  },
  fccCertificate: {
    url: 'https://www.freecodecamp.org/timh1203/front-end-certification',
    alt: 'My Free Code Camp Certificate',
  },
  wdbcCertificate: {
    url: 'https://www.udemy.com/certificate/UC-F6RNIX9G',
    alt: 'My Web Dev Bootcamp Certificate',
  },
  tenavoxAdmin: {
    url: 'https://admin-v2.tenavox.com',
    alt: 'Tenavox Admid App Login',
    video: 'https://youtu.be/o4Kd1pOrdlI',
  },
  refreshr: {
    url: 'https://github.com/Lambda-School-Labs/labs10-student-follow',
    alt: 'Refreshr App Github Repository',
    video: 'https://youtu.be/_iP127acNts',
  },
  guidr: {
    url: 'https://github.com/guidr-app-lion-team',
    alt: 'Guidr App Github Organization',
    video: 'https://youtu.be/0C2toPa9GHM',
  },
  dullesBarber: {
    url: 'http://dullesbarber.com',
    alt: 'Dulles Barber Barber Client',
  },
  derikJones: {
    url: 'http://derikjones.com',
    alt: 'Derik Jones Architect Client',
  },
  vzSuites: {
    url: 'http://vzsuites.com',
    alt: 'VZ Suites Rental Client',
  },
  sightsee: {
    url: 'http://www.sightseewithme.com',
    alt: 'Sightsee With Me Tour Client',
  },
  tenavox: {
    url: 'https://www.tenavox.com/',
    alt: 'Commercial Real Estate Startup',
  },
  opensymmetry: {
    url: 'https://www.opensymmetry.com/',
    alt: 'Global SPM Company',
  },
  plutuspioneerprogram: {
    url: 'https://developers.cardano.org/en/plutus-pioneer-program/',
    alt: 'Plutus Pioneer Program',
  },
  hispanichackers: {
    url: 'https://www.hispanichackers.com/',
    alt: 'Austin Hispanic Hackers',
  },
}

export const projectMainData = {
  tenavoxAdmin: {
    name: 'Tenavox Admin',
    desc:
      'An internal-facing admin app for the management of real estate properties from brokers. Worked as a core developer with a lead developer and product owners employing agile methodologies and git workflow. The technology stack includes NextJS, ReactJS, NodeJS, PostGresQL, AWS, Docker, CircleCI, Auth0.',
    demo: 'https://admin-v2.tenavox.com',
    video: 'https://www.youtube.com/watch?v=ihciDpboFTo',
    github: 'https://github.com/tenavox/admin-v2-tenavox',
  },
  refreshr: {
    name: 'Refreshr',
    desc:
      'A spaced-repetition review app to send out learning snippets for students from the teacher. Worked as a core developer with 4 full stack developers deploying agile methodologies and git workflow. The technology stack includes ReactJS, NodeJS, PostGresQL, SendGrid, and TypeForm.',
    demo: 'https://refreshr-app.netlify.com/',
    video: 'https://www.youtube.com/watch?v=u89p3RqXqZM',
    github: 'https://github.com/Lambda-School-Labs/labs10-student-follow',
  },
  guidr: {
    name: 'Guidr',
    desc:
      'A trip logging app to help backcountry guides of all types log their private or professional adventures. Led as ScrumMaster for 5 developers of various skill levels, coordinated team goals to build the application, committed code, and assisted in debugging. The technology stack includes ReactJS, Redux, NodeJS, and Sqlite3.',
    demo: 'https://guidr2.netlify.com/',
    video: 'https://youtu.be/0C2toPa9GHM',
    github: 'https://github.com/guidr-app-lion-team',
  },
  dullesBarber: {
    name: 'Dulles Barber',
    desc:
      'This site is home for an actual barber shop business based in Sterling, Virginia. Serves as an online business hub for store information, announcements, and digital contact. The technology stack includes GatsbyJS, GraphQL, and Styled Components.',
    demo: 'http://dullesbarber.com/',
    github: 'https://github.com/timh1203/dullesBarber',
  },
  derikJones: {
    name: 'Derik Jones Architect',
    desc:
      "An architect portfolio website built for a client. Showcases the client's professional designs, projects, and inspirational photos. The technology stack includes GatsbyJS, GraphQL, and Styled Components.",
    demo: 'http://derikjones.com/',
    github: 'https://github.com/timh1203/derikjones',
  },
}

export const projectAltData = {
  wanderlustoria: {
    name: 'Wanderlustoria',
    desc:
      'A travel content sharing app made for travelers to share pictures from their travel journey. Ability to interact through profile creation, uploading photos, and comment system. The technology stack includes NodeJS, ExpressJS, and MongoDB. APIs includes PassportJS, Cloudinary, and Google Geocoder.',
    demo: 'https://wanderlustoria.herokuapp.com/',
    github: 'https://github.com/timh1203/wanderlustoria',
  },
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
    demo: 'https://timh1203.github.io/respondez-app',
    github: 'https://github.com/timh1203/respondez-app',
  },
  pomodoroApp: {
    name: 'Phenomenal Pomodoro App',
    desc:
      'The work/break cycle app based on the Pomodoro Technique by by Francesco Cirillo. The app was for the Free Code Camp curriculum. The technology used was javascript.',
    demo: 'https://timh1203.github.io/pomodoro-app',
    github: 'https://github.com/timh1203/pomodoro-app',
  },
  twitchApp: {
    name: 'Terrific Twitch App',
    desc:
      'A Twitch app displaying the channels streaming status from the Twitch API. The technology stack includes ReactJS and FireBase.',
    demo: 'https://timh1203.github.io/twitch-app',
    github: 'https://github.com/timh1203/twitch-app',
  },
  wikipediaApp: {
    name: 'Witty Wikipedia App',
    desc:
      'A wikipedia app that displays a user search results or a random article from the WikiMedia API. The technology used was javascript.',
    demo: 'https://timh1203.github.io/wikipedia-app',
    github: 'https://github.com/timh1203/wikipedia-app',
  },
  weatherApp: {
    name: 'Wonderful Weather App',
    desc:
      "A weather app that displays the weather forecast (24 hours, 48 hours, and 1 week) based on the user's IP location. The technologies used were javascript, Dark Sky API, and Skycons.",
    demo: 'https://timh1203.github.io/weather-app',
    github: 'https://github.com/timh1203/weather-app',
  },
  photographySite: {
    name: 'Photography Website',
    desc:
      'A photography website that uses an API to pull pictures from instagram. The technologies used were javascript, Materialize, and InstafeedJS.',
    demo: 'https://timh1203.github.io/photo-site',
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
    demo: 'https://timh1203.github.io/quote-machine',
    github: 'https://github.com/timh1203/quote-machine',
  },
  travelersChecklist: {
    name: "Traveler's Checklist",
    desc:
      'An app for the travler to make a packing list before a big trip. The technologies used were javascript and jQuery.',
    demo: 'https://timh1203.github.io/traveler-checklist',
    github: 'https://github.com/timh1203/traveler-checklist',
  },
  sightseeWithMe: {
    name: 'Sightsee With Me',
    desc:
      'A sightseeing business based in Charlottesville. Created with the Divi Theme Framework by Elegant Themes.',
    demo: 'http://www.sightseewithme.com',
  },
  vzSuites: {
    name: 'VZ Suites',
    desc:
      'An apartment rental business based in Seattle. Created with the Divi Theme Framework by Elegant Themes.',
    demo: 'http://vzsuites.com',
  },
  talkOfTheTown: {
    name: 'Talk of The Town Languages',
    desc:
      'An language business based in Charlottesville. Created with the Divi Theme Framework by Elegant Themes.',
    demo: 'http://talkofthetownlanguages.com',
  },
}

export const skills = {
  frontEnd: [
    'JavaScript',
    'React',
    'Redux',
    'Next.js',
    'GatsbyJS',
    'Styled Components',
    'Flexbox',
    'Sass/CSS',
    'HTML',
  ],
  backEnd: [
    'Node.js/Express.js',
    'RESTful Architecture/APIs',
    'SQL/PostgreSQL',
    'MongoDB',
    'Netlify',
    'Heroku',
    'Python/Django',
    'C',
  ],
  other: [
    'Git/Github',
    'Jest',
    'Cypress',
    'CircleCI',
    'Yarn/NPM',
    'Auth0',
    'Jira',
    'Vietnamese (fluent)',
    'Spanish (basic)',
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
