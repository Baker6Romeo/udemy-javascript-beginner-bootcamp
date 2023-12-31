var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
  ];

var gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5-Math.random());

const game = document.getElementById('game-board');
var grid = document.createElement('section');
grid.classList.add('grid');
game.appendChild(grid);

for(i=0; i < gameGrid.length; i++) {
    var card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.dataset.name = gameGrid[i].name;
    var front = document.createElement('div');
    front.classList.add('front');
    card.append(front);
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;
    card.append(back);
    grid.appendChild(card);
}

var counter = 0;
var previousClick = null;
const delay = 1000;
var selected = document.querySelectorAll('.selected')

grid.addEventListener('click', (e) => {
  var parentNode = e.target.parentNode
  if(parentNode != previousClick && !parentNode.classList.contains('matched')) {
    if(counter < 2 && parentNode.classList.contains('card')) {
      counter++;
      let card = parentNode;
    card.classList.add('selected');
    previousClick = parentNode;
    }
    if(counter === 2) {
      selected = document.querySelectorAll('.selected')
      if(isAMatch(selected[0], selected[1])) {
        for(let i = 0; i < selected.length; i++) {
          setTimeout(() => selected[i].firstChild.classList.add('matched'), delay);
        }
      }
      setTimeout(resetGuess, delay);
    }
  }
});

function isAMatch(card1, card2) {
  return card1.dataset.name === card2.dataset.name;
}

function resetGuess() {
  counter = 0;
  previousClick = null;
  for(let i = 0; i < selected.length; i++) {
    selected[i].classList.remove('selected');
  }
  selected = document.querySelectorAll('.selected');
}