/*function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

let randomFraction = Math.random();
printMessage(`Wylosowany ulamek to: ${randomFraction}`);

/*let randomFraction = Math.random();
printMessage(`Wylosowany ulamek to: ${randomFraction}`);
let calculation = randomFraction * 3 + 1;
printMessage("Ulamek pomnozony przez 3 i powiekszony o 1: " + calculation);
let roundNumber = Math.floor(calculation);
printMessage("Liczba po zaokragleniu w dol to:" + roundNumber);
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("Wylosowana liczba to: " + randomNumber);*/

/*let playerInput = prompt("Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.");
console.log("Gracz wpisal: " + playerInput);
let playerMove = getMoveName(playerInput);
let computerMove = getMoveName(randomNumber);

/*function getMoveName(playerMove) {
  return playerInput;
}*/
/*function getMoveName(computerMove, playerMove) {
  if (computerMove == 1) {
    return "kamien";
  } else if (computerMove == 2) {
    return "papier";
  } else if (computerMove == 3) {
    return "nozyce";
  }
}

function getMoveName(computerMove, playerMove) {
  if (playerMove == 1) {
    return "kamien";
  } else if (playerMove == 2) {
    return "papier";
  } else if (playerMove == 3) {
    return "nozyce";
  } else {
    return "Nieznany ruch!";
  }
}
getMoveName(1, 3);

function displayResult(argMove) {
  printMessage("Zagrałem " + argMove1 + ", a Ty " + argMove);
  if (argMove == "papier" && argMove1 == "kamien") {
    printMessage("Ty wygrywasz!");
  } else if (argMove == "nozyce" && argMove1 == "papier") {
    printMessage("Ty wygrywasz!");
  } else if (argMove == "nozyce" && argMove1 == "papier") {
    printMessage("Ty wygrywasz!");
  } else if (argMove == "kamien" && argMove1 == "nozyce") {
    printMessage("Ty wygrywasz!");
  } else if (argMove == "kamien" && argMove1 == "papier") {
    printMessage("Ty przegrywasz!");
  } else if (argMove == "papier" && argMove1 == "nozyce") {
    printMessage("Ty przegrywasz!");
  } else if (argMove == "nozyce" && argMove1 == "kamien") {
    printMessage("Ty przegrywasz!");
  } else if (argMove == argMove1) {
    printMessage("Remisujesz!");
  } else {
    printMessage("Wybrales nieznany ruch!");
  }
}
displayResult("kamien");
displayResult("nozyce");
displayResult("papier");*/
