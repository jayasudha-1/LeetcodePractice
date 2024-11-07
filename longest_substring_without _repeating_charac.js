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


/*--Another way of sliding window easier method

var lengthOfLongestSubstring = function(s) {
    let maxLength=0;
    let left=0;
    const set=new Set();

    for(let right=0; right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        maxLength=Math.max(maxLength, right-left+1);
        set.add(s[right]);
    }
    return maxLength;
};
*/



//test case
s = "pwwkew"
result=lengthOfLongestSubstring(s);
console.log(result);
