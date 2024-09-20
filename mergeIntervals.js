var insert = function(intervals, newInterval) {
    const result=[];
    i=0;
    n=intervals.length;
    //before interval no overlapping happens

    while(i<n && intervals [i][1]< newInterval[0]){
        result.push(intervals[i]);
        i++;
    }
    //During intervals of merge overlapping:
    while(i<n && intervals [i][0]<= newInterval[1]){
       newInterval[0]=Math.min(intervals[i][0], newInterval[0]);
       newInterval[1]=Math.max(intervals[i][1], newInterval[1]);
       i++;
    }
    result.push(newInterval);
    
  //after interval no overlapping
     while(i<n){
        result.push(intervals[i]);
        i++;
    }
    return result;
};

// Test case
let intervals = [[1,3],[2,6],[8,10],[15,18]]
let result = merge(intervals);
console.log(result);