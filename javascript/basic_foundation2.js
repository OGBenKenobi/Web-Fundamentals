//Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggie(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr;
}

console.log(biggie([-1,3,5,-5]))

//Print Low, Return High - Create a function that takes an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr){
    min = arr[0];
    max = arr[0];
    for(i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

console.log(lowHigh([1,7,4,5,-27,99,2,4,5]))

//Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.

function printOne(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            odd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length -2]);
    return odd;    
}

console.log(printOne([0,4,44,36,7,66,34,97]))

//Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    newArr = [];
    for(i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2);
    }
    console.log(arr);
    return newArr;
}

console.log(doubleVision([1,2,3]))

//Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function count(arr){
    pos = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            pos++;
        }
    }
    arr[arr.length -1] = pos;
    return arr;
}
console.log(count([-1,1,1,1]))

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

function evenOdd(arr){
    var even = 0, odd = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0 ){
            odd = odd + 1
        }
        else odd = 0;
        if(arr[i] % 2 == 0){
            even = even + 1;
        }
        else even = 0;
        if(odd >= 3){
            console.log("That's odd!");            
        }
        if(even >= 3){
            console.log("Even more so!");            
        }
    }
}

var answer = evenOdd([7,99,61,19,24,6,2])

//Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

function inc(arr){
    for(i=0; i <arr.length; i++){
        if(i % 2 !== 0){
            arr[i] += 1;
        }
    }
    return arr;
}
console.log(inc([1,1,1,1]))

//Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].

function length(arr){
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i].length;
    }
    return arr;
}

console.log(length(["hello", "dojo", "awesome"]))

//Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function add(arr){
    newArr = [];
    for(i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

console.log(add([1,2,3,4]))

//Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr){
    ph = null;
    for(var i = 0; i < arr.length / 2; i++){
        ph = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = ph;
    }
return arr;
}

console.log(reverse([3,1,6,4,2]))

//Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function neg(arr){
    newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
           newArr.push(arr[i] * -1);
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(neg([1,-3,5]))

//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.

function hungry(arr){
    count = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            count += 1;
        }
    }
    if (count < 1){
    console.log("I'm hungry");
    }
}

console.log(hungry([1,2,3,"food"]))

//Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].



//Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].

function scale(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num
    }
return arr
}

console.log(scale([1,2,3],3))