var lengthOfLongestSubstring = function(s) {
    let maxLength=0;
    let charMap=new Map();
    for(let i=0,j=0;j<s.length;j++){
        if(charMap.has(s[j])){
            i=Math.max(charMap.get(s[j])+1,i);
        }
        maxLength=Math.max(maxLength, j - i + 1);
        charMap.set(s[j], j);
    }
    return maxLength;
};
//test case
s = "pwwkew"
result=lengthOfLongestSubstring(s);
console.log(result);