let computerMove = "kamien";
let playerMove = "papier";

function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

printMessage(
  " Zagrałem " +
    computerMove +
    "! Jeśli Twój ruch to " +
    playerMove +
    ",to wygrywasz!"
);
let randomFraction = Math.random();
printMessage(`Wylosowany ulamek to: ${randomFraction}`);
let calculation = randomFraction * 3 + 1;
printMessage("Ulamek pomnozony przez 3 i powiekszony o 1: " + calculation);
let roundNumber = Math.floor(calculation);
printMessage("Liczba po zaokragleniu w dol to:" + roundNumber);
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("Wylosowana liczba to: " + randomNumber);

if (randomNumber == 1) {
  computerMove = "kamien";

  printMessage("Moj ruch to: " + computerMove);
} else if (randomNumber == 2) {
  computerMove = "papier";
  printMessage("Moj ruch to: " + computerMove);
} else if (randomNumber == 3) {
  computerMove = "nozyce";
  printMessage("Moj ruch to: " + computerMove);
}

let playerInput = prompt("Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.");
console.log("Gracz wpisal: " + playerInput);

if (playerInput == "1") {
  playerMove = "kamien";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nozyce";
} else {
  playerMove = "nieznany ruch";
}

printMessage(" Twoj ruch to: " + playerMove);

if (computerMove == "kamien" && playerMove == "papier") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "papier" && playerMove == "nozyce") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "nozyce" && playerMove == "kamien") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "papier" && playerMove == "kamien") {
  printMessage("Ty przegrywasz!");
} else if (computerMove == "nozyce" && playerMove == "papier") {
  printMessage("Ty przegrywasz!");
} else if (computerMove == "kamien" && playerMove == "nozyce") {
  printMessage("Ty przegrywasz!");
} else if (computerMove == playerMove) {
  printMessage("Remisujesz!");
} else {
  printMessage("Wybrales nieznany ruch!");
}
