/**
 * Personalized greeting
 * Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
 *
 * Use conditionals to return the proper message:
 *
 * case	                   return
 * name equals owner	  'Hello boss'
 * otherwise	          'Hello guest'
 */

// Test Case
// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')

/**
 *
 * @param name
 * @param owner
 */
function greet (name, owner) {
    return name.toLowerCase() === owner.toLowerCase() ? 'Hello boss' : 'Hello guest' ;
}

console.log(greet('Daniel', 'Daniel')) ;
console.log(greet('Greg', 'Daniel')) ;