export const slate = '#1d1e22';
export const gray = '#ababab';
export const white = '#f5f5f5';
export const purple = '#3333ff';
export const orange = '#ffcc00';

export const darkTheme = {
  textColor: white,
  backgroundColor: slate,
  yBorderColor: `2px solid ${gray}`,
  xBorderColor: `2px solid ${slate}`,
  separatorColor: `3px solid ${white}`,
  themeToggleButton: purple,
  imageShadow: `1px 1px 5px ${gray}`,
  buttonShadow: `1px 1px 3px ${gray}`,
}

export const lightTheme = {
  textColor: slate,
  backgroundColor: white,
  yBorderColor: `2px solid ${slate}`,
  xBorderColor: `2px solid ${gray}`,
  separatorColor: `3px solid ${slate}`,
  themeToggleButton: orange,
  imageShadow: `1px 1px 5px ${slate}`,
  buttonShadow: `1px 1px 3px ${slate}`,
}

export const links = {
  "github": {
    "url": "https://github.com/timh1203",
    "alt": "My Github",
  },
  "linkedIn": {
    "url": "https://www.linkedin.com/in/timothyhoang/",
    "alt": "My LinkedIn",
  },
  "twitter": {
    "url": "https://twitter.com/travelDev",
    "alt": "My Twitter",
  },
  "medium": {
    "url": "https://medium.com/@timh1203",
    "alt": "My Medium",
  },
  "freeCodeCamp": {
    "url": "https://www.freecodecamp.org/timh1203",
    "alt": "My Free Code Camp",
  },
  "lambdaSchool": {
    "url": "https://lambdaschool.com/",
    "alt": "Lambda School Home",
  },
  "chingu": {
    "url": "https://chingu.io/",
    "alt": "Chingu Home",
  },
  "fccAshburn": {
    "url": "https://free-code-camp-ashburn.github.io/website/",
    "alt": "Free Code Camp Ashburn Home",
  },
  "resume": {
    "url": "https://docs.google.com/document/d/1vO5Ee5s1YYSpoAR3Ng5RQ-IoP3S6jpo3-ALeiYa2zZo/edit",
    "alt": "My Online Resume",
  },
  "fccCertificate": {
    "url": "https://www.freecodecamp.org/timh1203/front-end-certification",
    "alt": "My Free Code Camp Certificate",
  },
  "wdbcCertificate": {
    "url": "https://www.udemy.com/certificate/UC-F6RNIX9G/",
    "alt": "My Web Dev Bootcamp Certificate",
  },
  "wanderlustoria": {
    "demo": "https://wanderlustoria.herokuapp.com/",
    "github": "https://github.com/timh1203/wanderlustoria",
    "desc": "A travel content sharing platform with user authentication and google geocoder API written with Node, Express, and MongoDB."
  },
  "simonGame": {
    "demo": "https://timh1203.github.io/simon-game",
    "github": "https://github.com/timh1203/simon-game",
    "desc": "https://timh1203.github.io/simon-game"
  },
  "ticTacToe": {
    "demo": "https://timh1203.github.io/tictactoe-game",
    "github": "https://github.com/timh1203/tictactoe-game",
    "desc": "An ubiquitous game playable against AI (MiniMax algorithm) or another player written with ReactJS."
  },
  "dullesBarber": {
    "demo": "http://dullesbarber.com/",
    "github": "https://github.com/timh1203/dullesBarber",
    "desc": "A barber shop business based in Sterling. Created GatsbyJS, GraphQL, and Styled Components."
  },
}

export const skills = {
  "frontEnd": [
    "HTML/CSS",
    "JavaScript (ES6+)",
    "React/Redux",
    "Styled Components",
    "CSS Grid/Flexbox",
    "GatsbyJS",
    "Bootstrap",
    "jQuery",
  ],
  "backEnd": [
    "NodeJS/Express",
    "Python/Django",
    "C",
    "SQL/SQLite3",
    "MongoDB/Mongoose",
    "REST/APIs",
    "Authorization/Authentication",
    "Netlify",
    "Heroku",
  ],
  "other": [
    "Git/Github",
    "Gitflow Workflow",
    "Jest/Enzyme/SuperTest",
    "Yarn/NPM",
    "Mac OSX",
    "iTerm2",
    "VS Code",
  ]
}

export const chartData = {
  labels: [
    "HTML/CSS",
    "JavaScript",
    "React/Redux",
    "Node/Express",
    "Python/Django",
    "C",
    "SQL",
    "MongoDB",
    "Traveling"
  ],
  datasets: [{
    labels: ['Basic', 'Average', 'High', 'Ricktastic'],
    data: [3, 3, 3, 2, 2, 1, 1, 1, 4],
    backgroundColor: [
      '#E44D26',
      '#F5DC41',
      '#61DAFB',
      '#77AF63',
      '#000000',
      '#a0a0a0',
      '#336791',
      '#60BE86',
      '#70A8E0'
    ],
    borderColor: [
    ],
    borderWidth: 1
  }]
}

export const chartOptions = {
  title: {
    display: true,
    position: "top",
    text: 'Skills',
    fontSize: '24',
    fontFamily: 'Quicksand'
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  animation: {
    duration: 2000,
    easing: 'easeInOutQuad'
  },
  layout: {
    padding: {
      // top: 100,
      right: 100,
      // bottom: 100,
      left: 100
    },
  },
  scales: {
    xAxes: [{
      ticks: {
        fontSize: 14,
        fontFamily: 'Quicksand',
      }
    }],
    yAxes: [{
      ticks: {
        fontSize: 14,
        fontFamily: 'Quicksand',
        beginAtZero: true,
        min: 0,
        max: 5,
        callback: function (label) {
          switch (label) {
            case 0:
              return `YDKJ (You Don't Know Jack)`;
            case 1:
              return 'Basic (Win some, lose some)';
            case 2:
              return 'Medium (Putting in the reps)';
            case 3:
              return 'High (I Haz Da Skillz)';
            case 4:
              return "Rick'tastic★";
            default:
              return null;
          }
        }
      }
    }]
  }
}

export const projectsData = {
  "wanderlustoria": {
    "name": "Wanderlustoria",
    "desc": "A travel content sharing platform with user authentication and google geocoder API written with Node, Express, and MongoDB.",
    "demo": "https://wanderlustoria.herokuapp.com/",
    "github": "https://github.com/timh1203/wanderlustoria",
  },
  "simonGame": {
    "name": "Simon Game",
    "desc": "A memory sequence game released in 1978 with instrument sounds, keyboard play, and written with ReactJS.",
    "demo": "https://timh1203.github.io/simon-game",
    "github": "https://github.com/timh1203/simon-game",
  },
  "ticTacToeGame": {
    "name": "Tic Tac Toe",
    "desc": "An ubiquitous game playable against AI (MiniMax algorithm) or another player written with ReactJS.",
    "demo": "https://timh1203.github.io/tictactoe-game",
    "github": "https://github.com/timh1203/tictactoe-game",
  },
  "dullesBarber": {
    "name": "Dulles Barber",
    "desc": "A barber shop business based in Sterling. Created GatsbyJS, GraphQL, and Styled Components.",
    "demo": "http://dullesbarber.com/",
    "github": "https://github.com/timh1203/dullesBarber",
  },
  "pomodoroApp": {
    "name": "Pomodoro App",
    "desc": "The work/break cycle app based on the Pomodoro Technique by by Francesco Cirillo.",
    "demo": "https://timh1203.github.io/pomodoro-app/",
    "github": "https://github.com/timh1203/pomodoro-app",
  },
  "calculatorApp": {
    "name": "Calculator App",
    "desc": "A simple calculator app built with JavaScript not using the eval() method.",
    "demo": "https://timh1203.github.io/calculator-app",
    "github": "https://github.com/timh1203/calculator-app",
  },
}
