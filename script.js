const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const opponentChoiceText = document.getElementById('opponent-choice-text');

let userChoice = '';

function handleUserChoice(event) {
  userChoice = event.target.id;
  choices.forEach(choice => {
    if (choice.id !== userChoice) {
      choice.style.display = 'none';
    }
  });
  event.target.classList.add('selected');
  resultText.innerText = 'Esperando elección del oponente...';
  setTimeout(() => {
    const choicesArr = ['roca', 'papel', 'tijeras'];
    const opponentChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    choices.forEach(choice => {
      choice.style.display = 'none';
    });
    document.getElementById(opponentChoice).classList.add('selected');
    opponentChoiceText.innerText = `El oponente eligió: ${opponentChoice}`;
    resultText.innerText = getResultText(userChoice, opponentChoice);
    setTimeout(() => {
      choices.forEach(choice => {
        choice.style.display = 'block';
      });
      resultText.innerText = '';
      opponentChoiceText.innerText = '';
      choices.forEach(choice => {
        choice.classList.remove('selected');
      });
    }, 2000);
  }, 2000);
}

function getResultText(userChoice, opponentChoice) {
  switch (userChoice) {
    case 'roca':
      switch (opponentChoice) {
        case 'roca':
          return '¡Empate!';
        case 'papel':
          return '¡Perdiste! Papel cubre roca.';
        case 'tijeras':
          return '¡Ganaste! Roca aplasta tijeras.';
      }
      break;
    case 'papel':
      switch (opponentChoice) {
        case 'roca':
          return '¡Ganaste! Papel cubre roca.';
        case 'papel':
          return '¡Empate!';
        case 'tijeras':
          return '¡Perdiste! Tijeras cortan papel.';
      }
      break;
    case 'tijeras':
      switch (opponentChoice) {
        case 'roca':
          return '¡Perdiste! Roca aplasta tijeras.';
        case 'papel':
          return '¡Ganaste! Tijeras cortan papel.';
        case 'tijeras':
          return '¡Empate!';
      }
      break;
  }
}
 
choices.forEach(choice => {
  choice.addEventListener('click', handleUserChoice);
});
