/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote==magazine) return true
    for(var i=0;i<ransomNote.length;i++){
        var item=ransomNote[i]
        if(magazine.includes(item)){
            magazine=magazine.replace(item,'')
        }else{
            return false
        }
    }
    return true
};
console.log(canConstruct("aa", "ab"));
