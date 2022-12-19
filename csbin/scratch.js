// // // // function palindrome(input) {
// // // //     //Remove punctuation and convert to lower case    
// // // input = input.toLowerCase().replace(/[^a-z]/g, "");
// // // //Base Case: If string is empty or only has one character, then it is NOT a palindrome 
// // // if (input.length <= 1) {
// // //     return true;
// // //     //Base Case2: If first and last characters don't match, then it is NOT a paliindrome 
// // // } else if (input[ 0 ] !== input[ input.length - 1 ]) {
// // //     return false;
// // // } else {
// // //     //Recursive Case: Remove first and last characters and then check if the new string is a palindrome by checking if the first and last characters are the same 
// // //     return palindrome(input.slice(1, -1))
// // // }
// // // }


// // function palindrome(input) {
// //     input = input.toLowerCase().replace(/[^a-z]/g, "");
// //     //Base Case: If input length is 0 or 1 letter then it is NOT a paliindrome 
// //     if (input.length <= 1) {
// //         return true;
// //     }
// //     //Base Case2: If first and last letters are not the same, then it is NOT a palindrome 
// //     else if (input[ 0 ] !== input[ input.length - 1 ]) {
// //         return false;
// //     } else {
// //         //Recursive Case: Passes the base cases, so we call it again but this time removing the first and last letters essentially checking to see if the new input's first and last letters are equal 
// // //         return palindrome(input.slice(1, -1))
// // //     }
// // // }


// // // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// // // console.log(palindrome("llama mall")); //-> true
// // // console.log(palindrome("jmoney")); //-> false


// // function palindrome(input) {
// //     //Remove punctuation and make all letters lower case 
// //     input = input.toLowerCase().replace(/[^a-z]/g, "");
// //     //Base Case:If string is empty or only has one letter, then it IS a palindrome 
// //     if (input.length <= 1) {
// //         return true
// //     }
// //     //Base Case2: If the first and last letters of the string are not the same, then it is NOT a palindrome 
// //     else if (input[ 0 ] !== input[ input.length - 1 ]) {
// //         return false;
// //     } else {
// //         //Recursive Case:
// //         return palindrome(input.slice(1, -1));
// //     }
// // }


// // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// // console.log(palindrome("llama mall")); //-> true
// // console.log(palindrome("jmoney")); //-> false

// // let testString = "sdh205rfa-stack-2xwJGG4Twesdh205rfa-stack-2xwJGG4T>"
// // console.log(testString.replace(/[^a-z]/g, ""))

// // testString.replace(/[^a-z]/g, "")
// // testString.replace(/[^a-z]/g, "");
// // testString.replace(/[^a-z]/g, "");
// // testString.replace(/[^a-z]/g, "")

// function palindrome(input) {
//     //Convert String 
//     input = input.toLowerCase().replace(/[^a-z]/g, "");
//     //Base Case: If string is 0 or 1, it IS a palindrome 
//     if (input.length <= 1) {
//         return true;
//     }
//     //Base Case 2: If the first and last letters of the string are not the same, then it is NOT a palindrome  
//     else if (input[ 0 ] !== input[ input.length - 1 ]) {
//         return false
//     }
//     //Recursive Case: Return the function agian but this time removng the first and last letters
//     else {
//         return palindrome(input.slice(1, -1))
//     }
// }


// function palindrome(input) {
//     input = input.toLowerCase().replace(/[^a-z]/g, "");
//     if (input.length <= 1) {
//         return true;
//     }
//     else if (input[ 0 ] !== input[ input.length - 1 ]) {
//         return false;
//     }
//     else {
//         return palindrome(input.slice(1, -1))
//     }
// }







function palindrome(input) {
    //Convert input to lowercase and remove all punctuation 
    input = input.toLowerCase().replace(/[^a-z]/g, "");
    //Base Case: If input is 1 or 0 letters, then it IS a palindrome 
    return helper(input);

}
function helper(word) {
    if (word.length <= 1) {
        return true;
    }
    else if (word[ 0 ] !== word[ word.length - 1 ]) {
        return false;
    } else {
        return helper(word.slice(1, -1))
    }

}




console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false


