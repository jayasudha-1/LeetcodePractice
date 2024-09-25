
var palindrome=function(s){
    s=s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let left=0;
    let right=s.length-1;
    while(left<right)
        {
            if(s[left]!==s[right]){
                return false;
            }else{
                right--;
                left++;
            }
    }
    return true;
};


//test case
s = "A man, a plan, a canal: Panama"
let result = palindrome(s);
console.log(result);