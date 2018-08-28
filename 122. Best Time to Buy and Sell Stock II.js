/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var result = 0
    var i = 0
    var pre, cur
    while (i + 1 < prices.length) {
        pre = prices[i]
        cur = prices[i + 1]
        if (pre < cur) {
            result = result + cur - pre
            i++
        }
        if (pre >= cur) {
            i++
        }
    }
    return result
};