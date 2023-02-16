let num =15
let fib1=0
let fib2=1
let fib3
console.log(fib1);
console.log(fib2);
for (let i = 0; i <=num; i++) {
    
    fib3=fib1+fib2
    fib1=fib2
    fib2=fib3
    console.log(fib3);
}