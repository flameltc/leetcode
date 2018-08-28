  /**
   * @param {number} left
   * @param {number} right
   * @return {number[]}
   */
  var selfDividingNumbers = function (left, right) {
    var number = []
    for (let i = left; i <= right; i++) {
      if (isSelfdividing(i)) {
        number.push(i);
      }
    }
    return number

    function isSelfdividing(n) {
      var nl = (n + "").length
      var flag = n
      var m
      for (let i = 0; i < nl; i++) {
        m = flag % 10
        flag = (flag - m) / 10
        if (n % m !== 0) {
          return false
        }
      }
      return true
    }
  };