function monkeyCount(n) {
    let ret = [] ;
    for (let i = 1; i <= n; i++) {
        ret.push(i) ;
    }

    return ret ;
}

console.log(monkeyCount(1)) ;
console.log(monkeyCount(10)) ;
console.log(monkeyCount(15)) ;