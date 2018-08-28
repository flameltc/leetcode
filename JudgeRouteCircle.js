/**
 * Up,Down,Left,Right
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  var x = 0,
    y = 0
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == 'U') {
      y++
    } else if (moves[i] == 'D') {
      y--
    } else if (moves[i] == 'R') {
      x++
    } else if (moves[i] == 'L') {
      x--
    }
  }
  if (x == 0 && y == 0) {
    return true
  }
  return false
};
judgeCircle('UD')