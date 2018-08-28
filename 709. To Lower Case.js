/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    for(var i=0;i<str.length;i++){
        if(str[i]>='A'&&str[i]<='Z'){
            st=String.fromCharCode(str[i].charCodeAt()+32)
            str=str.substr(0,i)+st+str.substr(i+1)
        }
    }
    return str
};
toLowerCase('Az')