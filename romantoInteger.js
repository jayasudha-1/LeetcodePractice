var romanToInt = function(s) {
    const romanValues={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result=0;

    for(i=0;i<s.length;i++){
        let currentvalue=romanValues[s[i]];
        let nextvalue=romanValues[s[i+1]];
        if(nextvalue && currentvalue <nextvalue){
            result +=nextvalue- currentvalue;
            i++;
        }else
        result += currentvalue;
    }
    return result;
};
let s = "MCMXCV"
let result = romanToInt(s);
console.log(result);