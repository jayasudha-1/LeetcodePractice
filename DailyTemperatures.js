var dailyTemperatures = function(temperatures) {
    let n=temperatures.length;
    const answer=new Array(n).fill(0);
    const stack=[];

    for(let i=0;i<n;i++){
        while(stack.length>0 && temperatures[i]>temperatures[stack[stack.length-1]]){
            prevIndex=stack.pop();
            answer[prevIndex]=i-prevIndex;
        }
        stack.push(i);
    }
    return answer;
    
};
let temperatures = [73,74,75,71,69,72,76,73];
let result = dailyTemperatures(temperatures);
console.log(result);