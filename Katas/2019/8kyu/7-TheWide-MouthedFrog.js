// 第一版
// function mouthSize(animal) {
//     if (typeof animal === 'string') {
//         if (animal.toLowerCase() === 'alligator') {
//             return 'small' ;
//         } else {
//             return 'wide' ;
//         }
//     }
// }

// 第二版
function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide' ;
}