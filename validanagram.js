
var isAnagram=function(s,t){
    let validanagramS= s.split('').sort().join('');
    let validanagramT= t.split('').sort().join('');
    if(validanagramS===validanagramT){
        return true;
    }else
    return false;
};


//test case
//s = "anagram", t = "nagaram"
s = "anagram", t = "cat"
let result = isAnagram(s,t);
console.log(result);