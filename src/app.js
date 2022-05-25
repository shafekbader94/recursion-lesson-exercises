/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  //Your code here
  if(num === 1)
      return num
    return num * findFactorial(num - 1) 
      

}
console.log(findFactorial(8))

//Exercise 2
const reverseString = function(word) {
  //Your code here
  if(word.length === 1)
    return word
 
    return word.charAt(word.length - 1) + reverseString(word.substring(0, word.length - 1))


}
console.log(reverseString("Hello World"))

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  //Your code here
  if(arr1.length === 0)
    return
    arr2[arr1.length - 1] = arr1.splice(arr1.length - 1, 1 )[0]
    return swap(arr1, arr2)

}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]



/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }