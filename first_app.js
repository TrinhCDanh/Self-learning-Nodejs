CallFunction = (func) => {
    func();
}

console.log("Hello world!");
let myFunc = (test) => {
    console.log("Hello world!" + test);
}

// CallFunction();
myFunc("abf");
//setTimeout(myFunc, 3000);
/* setTimeout(() => {
    console.log("My name is Danh");
}, 3000); */

/* let time = 0;
var timer = setInterval(() => {
    time += 2;
    console.log(`${time} loop`);
    if (time > 7) {
        clearInterval(timer);
    }
}, 2000); */

/* let arr = [1,2,3];
let arr_two = [...arr, 4, 5];
console.log(arr_two); */