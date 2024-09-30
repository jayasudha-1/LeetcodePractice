var maxProfit = function(prices) {
    if(prices.length<=0){
        return 0;
    } 
    let minPrice=prices[0];
    let maxProfit=0;

    for(let i=1;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice=prices[i];
        }
        else{
             let currentProfit=prices[i]-minPrice;
            if(currentProfit>maxProfit)
            maxProfit=currentProfit;
        }
    }
    return maxProfit;
};
//testcases
let prices=[7,1,5,3,6,4];
result=maxProfit(prices);
console.log(result);