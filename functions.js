function printMessage('Zagrałem' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!`); 
let comuterMove = 'kamien';
let playerMove = 'papier';
{
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
