/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var map = new Map()
    var res = [],
        number = []
    for (var item of nums) {
        map.set(item, map.get(item) + 1 || 1)
    }
    for (var [key, value] of map) {
        res.push([key, value])
    }
    res.sort((a, b) => b[1] - a[1])
    for (var i = 0; i < k; i++) {
        number.push(res[i][0])
    }
    return number
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));