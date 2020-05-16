/*function playGame() {
  /*let playerInput = 1;
  printMessage("kamien");

  /*let playerInput = 2;
  printMessage("papier");
  function clearMessages() {}
  let playerInput = 1;
  printMessage("kamien");
  let playerInput = 2;
  printMessage("papier");
  let playerInput = 3;
  printMessage("nozyce");

  function printMessage(msg) {
    let div = document.createElement("div");
    div.innerHTML = msg;
    document.getElementById("messages").appendChild(div);
  }

  function clearMessages() {
    document.getElementById("messages").innerHTML = "";
  }

  let randomFraction = Math.random();
  printMessage(`Wylosowany ulamek to: ${randomFraction}`);
  let calculation = randomFraction * 3 + 1;
  printMessage("Ulamek pomnozony przez 3 i powiekszony o 1: " + calculation);
  let roundNumber = Math.floor(calculation);
  printMessage("Liczba po zaokragleniu w dol to:" + roundNumber);
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("Wylosowana liczba to: " + randomNumber);

  /*let playerInput = prompt(
    "Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce."
  );
  console.log("Gracz wpisal: " + playerInput);
  let argMove = getMoveName(playerInput);
  let argMove1 = getMoveName(randomNumber);

  function getMoveName(move) {
    const result = argMove;
    return result;
  }

  function getMoveName(argMove) {
    if (argMove == 1) {
      return "kamien";
    } else if (argMove == 2) {
      return "papier";
    } else if (argMove == 3) {
      return "nozyce";
    } else {
      return "Nieznany ruch!";
    }
  }
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
  displayResult("papier");
}

function buttonClicked() {
  playGame("Wybrales" + playerInput);
}

let playRock = document.getElementById("play-rock");
playRock.addEventListener("kamien", buttonClicked);

function buttonClicked() {
  printMessage("Wybrales" + playerInput);
}
let playPaper = document.getElementById("play-paper");
playPaper.addEventListener("papier", buttonClicked);

function buttonClicked() {
  printMessage("Wybrales" + playerInput);
}
let playScissors = document.getElementById("play-scissors");
playScissors.addEventListener("nozyce", buttonClicked);
playGame("kamien");
playGame("papier");
playGame("nozyce");*/
