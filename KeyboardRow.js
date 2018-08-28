/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let arr1=['q','w','e','r','t','y','u','i','o','p','Q','W','E','R','T','Y','U','I','O','P']
  let arr2=['a','s','d','f','g','h','j','k','l','A','S','D','F','G','H','J','K','L']
  let arr3=['z','x','c','v','b','n','m','Z','X','C','V','B','N','M']
  let cur,arr=[]
  for(let i=0;i<words.length;i++){
    cur=0
    for(let j=0;j<words[i].length;j++){
      if(arr1.includes(words[i][j])){
        cur+=1
      }
      if(arr2.includes(words[i][j])){
        cur+=2
      }
      if(arr3.includes(words[i][j])){
        cur+=3
      }
    }
    if(cur==words[i].length||cur==2*words[i].length||cur==3*words[i].length){
      arr.push(words[i])
    }
  }
  return arr
};
findWords(["qz"])