/**
 *
 * Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

 * if bmi <= 18.5 return "Underweight"

 * if bmi <= 25.0 return "Normal"

 * if bmi <= 30.0 return "Overweight"

 * if bmi > 30 return "Obese"
 */


// Test Case
// Test.assertEquals(bmi(80, 1.80), "Normal");

// // 第一版
function bmi(weight, height) {
   var bmiIndex = weight / (height * height) ;

   if ( bmiIndex <= 18.5) {
       return 'Underweight' ;
   } else if (bmiIndex <= 25.0) {
       return 'Normal' ;
   } else if (bmiIndex <= 30.0) {
       return 'Overweight' ;
   } else if ( 30.0 < bmiIndex) {
       return 'Obese' ;
   }



}

// 第二版
function bmi(weight, height) {
    var bmiIndex = weight / (height * height) ;
    switch (true) {
        case bmiIndex < 18.5:
            return 'Underweight' ;
        case bmiIndex <= 25.0:
            return 'Normal' ;
        case bmiIndex <= 30:
            return 'Overweight' ;
        case bmiIndex > 30:
            return 'Obese' ;
    }
}

console.log(bmi(80, 1.8)) ;
