/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A.length!=B.length) return false
    if(A.length==0) return true
    for(var i=0;i<A.length;i++){
        A=A.substr(1)+A.substr(0,1)
        if(A==B){
            return true
        }
    }
    return false
};
rotateString('abcde','abced')