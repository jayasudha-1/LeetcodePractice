var insertInterval=function(intervals, newInterval){

    let i=0;
    let n=intervals.length;
    const result=[];

    //no overlapping
    while(i<n && intervals[i][1]< newInterval[0]){
        result.push(intervals[i]);
        i++;
    }
    //during overlapping of new intervals

    while(i<n && intervals[i][0]<= newInterval[1]){
        newInterval[0]=Math.min(intervals[i][0], newInterval[0]);
        newInterval[1]=Math.max(intervals[i][1], newInterval[1]);
        i++;
    }result.push(newInterval);


    //after interval of overlapping
    while(i<n){
        result.push(intervals[i]);
        i++;

    }
    return result;

};


//Test case
let intervals = [[1,3],[6,9]], newInterval = [2,5]
result=insertInterval(intervals,newInterval);
console.log(result);
//Output: [[1,5],[6,9]]