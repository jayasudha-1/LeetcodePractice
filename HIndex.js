var hIndex=function(citations){
    citations.sort((a,b)=>b-a);

    let h=0;
    for(let i=0;i<citations.length;i++){
        if(citations[i] >= i+1){
            h++;
        }
        else break;
    }
    return h;

};
//testcases
let citations=[3,0,6,1,5];
result=hIndex(citations);
console.log(result);