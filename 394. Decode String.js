/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    var cnu = 0
    var st = ''
    var top = ''
    var nums = []
    var str = []
    for (var i = 0; i < s.length; i++) {
        if (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57) {
            cnu = 10 * cnu + (s[i] - '0')
        } else if (s[i] == '[') {
            nums.push(cnu)
            cnu = 0
            str.push(st)
            st = ''
        } else if (s[i] == ']') {
            var k = nums.pop()
            for (var j = 0; j < k; j++) {
                top += st
            }
            st = str.pop() + top
            top = ''
        } else {
            st += s[i]
        }
    }
    return st
};