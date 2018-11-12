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
