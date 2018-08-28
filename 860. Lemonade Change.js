/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    var five = 0,
        ten = 0
    for (var i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            five++
        } else if (bills[i] == 10) {
            if (five > 0) {
                five--
            } else {
                return false
            }
            ten++
        } else {
            if (ten > 0 && five > 0) {
                ten--
                five--
            } else if (ten <= 0 && five > 2) {
                five = five - 3
            } else {
                return false
            }
        }
    }
    return true
};
lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5])