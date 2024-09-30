var maxProfit = function(prices) {
    let profit=0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            profit =profit+prices[i]-prices[i-1];
        }
    }
    return profit;
};
//testcases
let prices=[7,1,5,3,6,4];
result=maxProfit(prices);
console.log(result);