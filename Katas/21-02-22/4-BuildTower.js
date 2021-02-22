/**
 *
 *
 * Build Tower
 * Build Tower by the following given argument:
 * number of floors (integer and always greater than 0).
 *
 * Tower block is represented as *
 * for example, a tower of 3 floors looks like below

 * [
 * '  *  ',
 * ' *** ',
 * '*****'
 * ]
 * and a tower of 6 floors looks like below
 *
 * [
 * '     *     ',
 * '    ***    ',
 * '   *****   ',
 * '  *******  ',
 * ' ********* ',
 *  '***********'
 *  ]
 */

/**
 * map() + for + padStart + padEnd
 * @param nFloors
 */
// function towerBuilder(nFloors) {
//    const towerArr = Array(nFloors).fill('');
//    let maxLength = 2 * nFloors - 1;
//
//    let ret = towerArr.map((item, index) => {
//        let block = '';
//        for (let i = 0; i < 2 * (index + 1) - 1; i++) {
//            block += '*';
//        }
//        block = block.padStart(nFloors + index, ' ');
//        block = block.padEnd(maxLength, ' ');
//
//        return block;
//    });
//
//    return ret;
// }

/**
 * repeat()
 * @param nFloors
 * @returns {[]}
 */
function towerBuilder(nFloors) {
    let towerArr = [];

    for (let i = 0; i < nFloors; i++) {
        let lines = ' '.repeat(nFloors - 1 - i)
            + '*'.repeat(2 * (i + 1) - 1)
            + ' '.repeat(nFloors - 1 - i);

        towerArr.push(lines);
    }

    return towerArr;
}

console.log(towerBuilder(6));