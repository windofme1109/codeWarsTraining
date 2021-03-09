/**
 *
 * Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.
 *
 * For example, Penny drinks the third can of cola and the queue will look like this:
 *
 * Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
 * Write a program that will return the name of the person who will drink the n-th cola.
 *
 * Input:
 * The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).
 *
 * Output / Examples:
 * Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.
 *
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"
 *
 *
 */

function whoIsNext(names, r){

    if (names.length >= r) {
        return names[r-1];
    }

    let initial = names.length;
    let step = 2 * names.length;
    let round = -1;
    while (initial <= r) {
        round += 1;
        initial += step  * Math.pow(2, round);
        if (initial === r) {
            return names[names.length - 1];
        }
    }
    let rest = r - (initial - step * Math.pow(2, round));
    round += 1;
    const quotient = rest / Math.pow(2, round);
    const remainder = rest % Math.pow(2, round);
    if (remainder === 0) {
        return names[quotient - 1];
    } else {
        return names[Math.floor(quotient)];
    }
}

// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5));
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 6));
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 13));
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 10));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 15));