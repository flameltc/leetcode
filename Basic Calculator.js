var calculate = function (s) {
    var stack = []
    var st = []
    var sum = 0
    var sign = 1
    var s = s.replace(/\s/g, '')
    for (var i = 0; i < s.length;) {
        if (s[i] >= '0' && s[i] <= '9') {
            var num = 0
            while (s[i] >= '0' && s[i] <= '9' && i < s.length) {
                num = 10 * num + (s[i++] - '0')
            }
            sum = sum + sign * num
        } else if (s[i] === '(') {
            stack.push(sum)
            st.push(sign)
            sum = 0
            sign = 1
            i++
        } else if (s[i] === '+') {
            sign = 1
            i++
        } else if (s[i] === '-') {
            sign = -1
            i++
        } else if (s[i] === ')') {
            sum = st.pop() * sum + stack.pop()
            i++
        }
    }
    return sum
}