//Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
    var sum = 0;               
    for(i = 0; i < num; i++){  
        sum += i + 1;
    }
    return sum;
}
console.log(sigma(5))

//Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function fact(num){
    var product = 1;
    for(i = 1; i < num +1; i++){
        product = product * i;
    }
    return product;
}
console.log(fact(5))

//Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(x,y){
    fib = 0;
    for(var i =0; i<10;i++){
        fib = x+y;
        x = y;
        y = fib;
        console.log(fib);                
    }
}

console.log(fibonacci(0,1));

//Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function second(arr){
    if (arr.length < 2) {
        return null;
    } else {
       return arr[arr.length - 2];
    }
}

console.log(second([1,67,1,9,1,4]));

//Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nth(arr,num){
    if (arr.length < 2) {
        return null;
    } else {
       return arr[arr.length - num];
    }
}

console.log(nth([11,67,1,9,14,4],6));

//Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function second(arr,num){
    big = arr[0];
    secBig = arr[0];
    for(var i = 0;i<arr.length;i++){
        if (arr[i] > big){
            secBig = big;
            big = arr[i];
        }
    }
    return secBig;
}

console.log(second([100,68,1,9,11,4],6));

//Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function repeat(arr){
    newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
return newarr;
}

console.log(repeat([1,7,11,15]));

//Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.

function fibonacci(n) {
    if (n == 0 || n == 1){
        return n;
    } 
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(10));