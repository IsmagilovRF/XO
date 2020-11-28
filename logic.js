let players = ['x', 'o'];
let activePlayer = 0;

// ! тут можно просто объявить board, а присваивать значение уже внутри startGame()
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// ! не забывайте удалять отладочные выводы в консоль =) 
console.log('board = ' + board);
console.log(board[1][1]);
function startGame() {
 // 1- создать игровое поле let board - массив массивов. Для обращения к ячейке игрового поля нужно знать строку и колонку этого поля
 board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
// 2- установить активного игрока
activePlayer = 0;
// 3- вызвать функцию renderBoard для отрисовки игрового поля
  renderBoard(board);
}

function click(row, column) {
  //Функция будет вызываться с двумя параметрами — номером строки и колонки ячейки, на которой произошел клик.
//1- обновить игровое поле, записать в нужную ячейку символ игрока
board[row][column] = players[activePlayer];
//2- вызвать функцию renderBoard для отрисовки игрового поля
renderBoard(board);
//3- проверить, выигрышная ли сложилась ситуация
let n = 3;
let k = 0;
let k1= 0;

// ! что за "магическая цифра" 2 в условии цикла? 
for (let l = 0; l < 2; ++l) {
  //диагональ правая/левая
  k = 0;
  k1 = 0;
  for (let i = 0; i < n; ++i) {
    if (board[i][i] === players[l]) {
      ++k;
    }
    if (board[i][n-1-i] === players[l]) {
      ++k1;
    }
  };
  if (k === n || k1 === n) {
    showWinner(activePlayer);
  }
  // проверка на горизонталь/вертикаль 
  for (let i = 0; i < n; ++i) { 
    k = 0;
    k1 = 0;
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === players[l]) {
        ++k;
      }
      if (board[j][i] === players[l]) {
        ++k1;
      }
    };
    if (k === n || k1 === n) {
      showWinner(activePlayer);
    }
  }
}
//4- Если ситуация выигрышная, вызвать функцию showWinner и передать в нее номер игрока (активного игрока = activePlayer)
//showWinner(activePlayer);
//5- Если нужно играть дальше, то передать ход следующему игроку

// ! попробуйте сократить эту конструкцию до одной строки
if (activePlayer === 0) {
  activePlayer = 1;}
  else {
    activePlayer = 0;}
//}
}