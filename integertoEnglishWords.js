// Example 1:

// Input: 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  var arr1 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  var arr2 = ['', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  // var arr3 = ['', 'Thousand', 'Million', 'Billion'] //100,1,000,1,000,000,1,000,000,000
  if (num == 0) {
    return 'Zero'
  }
  return targetNum(num).trim();

  function targetNum(num) {
    if (num < 20) {
      return arr1[num]
    } else if (num < 100) {
      return arr2[parseInt(num / 10) - 1] + ' ' + targetNum(num % 10)
    } else if (num < 1000) {
      return arr1[parseInt(num / 100)] + ' Hundred ' + targetNum(num % 100)
    } else if (num < 1000000) {
      return targetNum(parseInt(num / 1000)) + ' Thousand ' + targetNum(num % 1000)
    } else if (num < 1000000000) {
      return targetNum(parseInt(num / 1000000)) + ' Million ' + targetNum(num % 1000000)
    } else {
      return targetNum(parseInt(num / 1000000000)) + ' Billion ' + targetNum(num % 1000000000)
    }
  }

};