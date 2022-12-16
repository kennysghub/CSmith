class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        this.score++
    }
    login() {
        console.log("login");

    }
}
const user1 = new UserCreator("Eva", 9);
user1.increment();
console.log(user1)


function test(i = 0) {
    console.log('i ', i);
    if (i = 5) {
        console.log('base case reached');
        return 'function end'
    }
    test(i++);
}

console.log(test());