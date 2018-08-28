/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    var mm = new Map()
    var res = []
    for (var i = 0; i < s.length; i++) {
        if (!mm.has(s[i])) {
            mm.set(s[i], 1)
        } else {
            var num = mm.get(s[i]) + 1
            mm.set(s[i], num)
        }
    }
    for (var [key, value] of mm) {
        res.push(key.repeat(value))
    }
    res.sort((a, b) => b.length - a.length)
    return res.join('')
};
frequencySort('bbAa')