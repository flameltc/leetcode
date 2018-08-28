/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var width=parseInt(Math.sqrt(area))
    for(i=width;i>0;i--){
        if((area/i)%1==0){
            return [area/i,i]
        }
    }
 };
 constructRectangle(6)