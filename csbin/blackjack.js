function blackjack(array) {
    let dealerCount = 0;
    function dealer(a, b) {
        let playerCount = 0;
        let total = a + b;
        function player() {
            if (total === "bust") return "you are done!";
            dealerCount++;
            playerCount++;
            if (playerCount === 1) return total;
            total += array[ dealerCount - 2 ];
            if (total > 21) {
                total = "bust";
                dealerCount--;
            }
            return total;
        }
        return player;
    }
    return dealer;
}
// /*** Uncomment these to check your work! ***/

/*** DEALER ***/
const deal = blackjack([ 2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11 ]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// // /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!


// let sampleArray = [ 1, 2, 42, 3, 5, 2 ]
// let testCache = sampleArray[ 0 ]
// let newSample = sampleArray.slice(1);
// console.log("New Sample Array: " + newSample)
// console.log("testing Cache: " + testCache)


const numbers = [ 1, 2, 3, 4, 5 ];
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 15
