{
  function playGame(playerInput) {
    clearMessages();
    function printMessage(msg) {
      const div = document.createElement("div");
      div.innerHTML = msg;
      document.getElementById("messages").appendChild(div);
    }
    function clearMessages() {
      document.getElementById("messages").innerHTML = "";
    }
    const randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);
    function getMoveName(move) {
      if (move == 1) {
        return "kamien";
      } else if (move == 2) {
        return "papier";
      } else if (move == 3) {
        return "nozyce";
      } else {
        return "nieznany ruch!";
      }
    }
    const displayResult = function (computerMove, playerMove) {
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
    };
    displayResult(computerMove, playerMove);
  }
  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
