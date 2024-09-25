var productExceptSelf = function(nums) {

    const result=new Array(nums.length).fill(1);
    //cal left product
    let leftProduct=1;
    for(let i=0;i<nums.length;i++){
        result[i]=leftProduct;
        leftProduct =leftProduct*nums[i];
    }

    //cal right product
    let rightProduct=1;
    for(let i=nums.length -1; i>=0; i--){
        result[i]=result[i] * rightProduct;
        rightProduct =rightProduct*nums[i];
    }

return result;
};

//Test Cases
nums = [1,2,3,4]
result=productExceptSelf(nums);
console.log(result);