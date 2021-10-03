// Your Code Here!
//Thanks for Alex Mourtos and Paul Kaseta for assisting me with maze not appearing
//Thanks Eric Hoover on BIG hint on getting my player to move & wall check
const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

let player = {
  row: 9,
  col: 0,
};

let finish = {
  row: 8,
  col: 20,
};

const createMaze = function (map) {
  for (let rowNum = 0; rowNum < map.length; rowNum++) {
    let rowString = map[rowNum];
    //console.log(rowString);

    let rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for (let colNum = 0; colNum < rowString.length; colNum++) {
      let blockType = rowString[colNum];

      if (blockType.includes(" ")) {
        let blank = document.createElement("div");
        blank.className = "block";
        rowDiv.append(blank);
      } else if (blockType.includes("W")) {
        let wBlock = document.createElement("div");
        wBlock.className = "block wall";
        rowDiv.append(wBlock);
      } else if (blockType.includes("S")) {
        let start = document.createElement("div");
        start.className = "you";
        rowDiv.append(start);
        player.row = rowNum;
        player.col = colNum;
      } else if (blockType.includes("F")) {
        let end = document.createElement("div");
        end.className = "gameOver";
        rowDiv.append(end);
      }
    }

    let mazeDiv = document.getElementById("maze");
    mazeDiv.append(rowDiv);
  }
};

createMaze(map);

let boxTop = 0;
let boxLeft = 0;

document.addEventListener("keydown", moveYou);

function moveYou(event) {
  maze.you += ` ${event.code}`;
  switch (`${event.code}`) {
    case "ArrowDown":
      if (player.row === 14) {
        return;
      } else if (map[player.row + 1][player.col] === "W") {
        return;
      } else {
        boxTop += 20;
        document.querySelector(".you").style.top = boxTop + "px";
        player.row += 1;
        console.log(player);
        checkWin();
        break;
      }
    case "ArrowUp":
      if (player.row === 0) {
        return;
      } else if (map[player.row - 1][player.col] === "W") {
        return;
      } else {
        boxTop -= 20;
        document.querySelector(".you").style.top = boxTop + "px";
        player.row -= 1;
        console.log(player);
        checkWin();
        break;
      }
    case "ArrowLeft":
      if (player.col === 0) {
        return;
      } else if (map[player.row][player.col - 1] === "W") {
        return;
      } else {
        boxLeft -= 14.28;
        document.querySelector(".you").style.left = boxLeft + "px";
        player.col -= 1;
        console.log(player);
        checkWin();
        break;
      }
    case "ArrowRight":
      if (player.col === 20) {
        return;
      } else if (map[player.row][player.col + 1] === "W") {
        return;
      } else {
        boxLeft += 14.28;
        document.querySelector(".you").style.left = boxLeft + "px";
        player.col += 1;
        console.log(player);
        checkWin();
        break;
      }
  }
}

function checkWin() {
  if (player.col == finish.col) {
    document.getElementById("messages");
    messages.innerHTML = "<h2>You win!</h2>";
  } else {
    document.getElementById("messages");
    messages.innerHTML = "";
  }
}
