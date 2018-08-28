/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  var str=S.split(' ')
  var flag=['a','e','i','o','u','A','E','I','O','U']
  for(var i=0;i<str.length;i++){
    var s=str[i]
    if(flag.indexOf(s[0])==-1){
      s=s.substr(1)+s[0]
    }
    s=s+'maa'
    for(var j=0;j<i;j++){
      s=s+'a'
    }
    str[i]=s
  }
  return str.join(' ')
};
console.log(toGoatLatin("I speak Goat Latin"));
