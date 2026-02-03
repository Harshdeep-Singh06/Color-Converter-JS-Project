const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {

    if (e.target.id === 'blueBtn') {
      body.style.backgroundColor = 'blue';
    }

    if (e.target.id === 'orangeBtn') {
      body.style.backgroundColor = 'orange';
    }

    if (e.target.id === 'greenBtn') {
      body.style.backgroundColor = 'green';
    }

    if (e.target.id === 'yellowBtn') {
      body.style.backgroundColor = 'yellow';
    }

  });
});
