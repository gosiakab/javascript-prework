function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}
function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt("Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.");
let playerMove = getMoveName(playerInput);
function getMoveName(computerMove) {
  if (computerMove == 1) {
    return "kamien";
  } else if (computerMove == 2) {
    return "papier";
  } else if (computerMove == 3) {
    return "nozyce";
  }
}
function getMoveName(playerMove) {
  if (playerMove == 1) {
    return "kamien";
  } else if (playerMove == 2) {
    return "papier";
  } else if (playerMove == 3) {
    return "nozyce";
  } else {
    printMessage("Nie znam ruchu o nazwie " + playerMove + ".");
    return "nieznany ruch";
  }
}
function displayResult(computerMove, playerMove) {
  printMessage("Zagrałem " + computerMove + ",a Ty " + playerMove);
  if (computerMove == "kamien" && playerMove == "papier") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "kamien" && playerMove == "nozyce") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "papier" && playerMove == "kamien") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "papier" && playerMove == "nozyce") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "nozyce" && playerMove == "kamien") {
    printMessage("Ty przegrywasz!");
  } else if (computerMove == "nozyce" && computerMove == "papier") {
    printMessage("Ty przegrywasz!");
  } else if (computerMove == playerMove) {
    printMessage("Remisujesz!");
  } else {
    printMessage("Wybrales nieznany ruch!");
  }
}
displayResult(computerMove, playerMove);
