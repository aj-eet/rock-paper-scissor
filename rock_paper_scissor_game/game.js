const heading = document.getElementById('heading');

function changeColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random color
  heading.style.color = randomColor; // Apply the random color to the heading
}
setInterval(changeColor, 1000);


//logic for game:

let userScore = 0, compScore = 0;
let choices = document.querySelectorAll('.choice');

//to generate computer choice
const generateCompChoice = () => {
  let arr = ['rock', 'paper', 'secissor'];
  let compChoice = Math.floor(Math.random() * 3);

  return arr[compChoice];
}
let gameDraw = () => {

  let msg = document.querySelector('#printmsg');
  msg.innerHTML = 'Game is drawn!';
  msg.style.backgroundColor = 'purple';
  msg.style.color = 'white';

}

//function  to increase computer score in case when computer win.
let compWin = () => {
  if (compScore < 9) {
    compScore += 1;
    let cs = document.querySelector('#compScore');
    cs.innerHTML = compScore;
  }
  else {
    let diffPoints = compScore - userScore;
    let msg = document.querySelector('#printmsg');
    msg.innerHTML = ` Your score: ${userScore}  Computer score: ${compScore + 1} Computer win the series by ${diffPoints + 1} points!, Start again`;
    msg.style.backgroundColor = 'Yellow';
    msg.style.color = 'purple';
    userScore = 0, compScore = 0;
    let cs = document.querySelector('#compScore');
    cs.innerHTML = compScore;
    let us = document.querySelector('#userScore');
    us.innerHTML = userScore;


  }
}

//function to increase the user score in case when user win.
let userWin = () => {
  if (userScore < 9) {
    userScore += 1;
    let us = document.querySelector('#userScore');
    us.innerHTML = userScore;
  }
  else {
    let msg = document.querySelector('#printmsg');
    let diffPoints = userScore - compScore;
    msg.innerHTML = `Your score: ${userScore + 1}  Computer score: ${compScore} You won the series by ${diffPoints + 1} points!`;
    msg.style.backgroundColor = 'Yellow';
    
    msg.style.color = 'purple';
    userScore = 0, compScore = 0;
    let cs = document.querySelector('#compScore');
    cs.innerHTML = compScore;
    let us = document.querySelector('#userScore');
    us.innerHTML = userScore;
  }
}
const playGame = (userChoice) => {
  let compChoice = generateCompChoice();
  console.log('Computer choice: ', compChoice)
  if (userChoice == compChoice) {
    gameDraw();
  }
  else if (userChoice == 'paper') {
    if (compChoice == 'rock') {
      let msg = document.querySelector('#printmsg');
      msg.innerHTML = 'You win!';
      msg.style.backgroundColor = 'Green';
      msg.style.color = 'white';
      userWin();
    }
    else {
      let msg = document.querySelector('#printmsg');
      msg.innerHTML = 'You loose!';
      msg.style.backgroundColor = 'Red';
      msg.style.color = 'white';
      compWin();

    }
  }
  else if (userChoice = 'rock') {
    if (compChoice == 'paper') {
      let msg = document.querySelector('#printmsg');
      msg.innerHTML = 'You lose!';
      msg.style.backgroundColor = 'red';
      msg.style.color = 'white';
      compScore += 1;
      let cs = document.querySelector('#compScore');
      cs.innerHTML = compScore;
      compWin();
    }
    else {
      let msg = document.querySelector('#printmsg');
      msg.innerHTML = 'You win!';
      msg.style.backgroundColor = 'green';
      msg.style.color = 'white';
      userWin();

    }
  }
  else {
    if (compChoice == 'paper') {
      let msg = document.querySelector('#printmsg');
      msg.innerHTML = 'You win!';
      msg.style.backgroundColor = 'green';
      msg.style.color = 'white';
      userWin();
    }
    else {
      let msg = document.querySelector('#printmsg');
      msg.innerHTML = 'You lose!';
      msg.style.backgroundColor = 'red';
      msg.style.color = 'white';
      compWin();
    }
  }


}

// to take user choice : start of game or first step
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    let userChoice = choice.getAttribute('id')
    console.log('User choice: ', userChoice)
    playGame(userChoice);
  })
})
