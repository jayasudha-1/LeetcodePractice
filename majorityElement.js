var majorityElement = function(nums) {
    let majoritynum;
    let count = 0;
  
    for (let elem of nums) {
      if (count === 0) {
        majoritynum = elem;
      }
      if (majoritynum === elem) {
        count++;
      } else {
        count--;
      }
    }
    return majoritynum;
  };
//testcases
let nums = [2,2,1,1,1,2,2];
result=majorityElement(nums);
console.log(result);  