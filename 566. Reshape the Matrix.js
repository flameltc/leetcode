/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    var nr = nums.length
    var nc = nums[0].length
    if (r * c != nr * nc || nc == 0) return nums
    var result = []
    var row = 0,
        col = 0
    result[0] = []
    for (var i = 0; i < r; i++) {
        result[i] = []
    }
    for (var i = 0; i < nr; i++) {
        for (var j = 0; j < nc; j++) {
            result[row][col++] = nums[i][j]
            if (col == c) {
                col = 0
                row++
            }
        }
    }
    return result

};