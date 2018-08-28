/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  var mySet = new Set()
  for (let i = 0; i < candies.length; i++) {
    mySet.add(candies[i])
  }
  if (mySet.size < candies.length / 2) {
    return mySet.size
  } else {
    return candies.length / 2
  }
};
distributeCandies([1, 1, 1, 1, 2, 2, 2, 3, 3, 3])