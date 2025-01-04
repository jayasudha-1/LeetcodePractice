var tribonacci = function(n) {
    if (n===0) return 0;
   if (n===1) return 1;
    if (n===2) return 1;
   let triArray=[0,1,1];

   for(i=3; i<=n; i++){
       triArray[i]=triArray[i - 1] + triArray[i-2] + triArray[i - 3];
   }
   return triArray[n];
};
/*
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
*/