function generateRange(min, max, step){
    var tempNum = min ;
    var ret = [] ;
    while (tempNum <= max) {
        ret.push(tempNum) ;
        tempNum += step ;
    }

    return ret ;
}

console.log(generateRange(2, 10, 2)) ;
console.log(generateRange(1, 10, 3)) ;
console.log(generateRange(1, 10, 4)) ;