/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // var result=0
    // for(var i=1;i<=prices.length-1;i++){
    //     result=Math.max(result,Math.max(...prices.slice(i))-Math.min(...prices.slice(0,i))) 
    // }
    // return result

    var result=0,dis=0,s=0
    for(var i=s+1;i<prices.length;i++){
        if(prices[s]<prices[i]){
            dis=Math.max(prices[i]-prices[s],dis)
        }else {
            s=i
        }
    }
    return dis
};
maxProfit([2,5,3,6])