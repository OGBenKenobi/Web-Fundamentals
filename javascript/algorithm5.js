// Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function poss(arr) {
    for(var i = 0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr; 
}

console.log(poss([1,10,-5,-7,5,-1]));

// Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

function shift(arr){
    arr.shift();  
    arr.push(0);
    return arr;
}

console.log(shift([1,2,3,4,5,6]));

// Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].

function reverse(arr){
    holder = null;
    for(var i = 0; i < arr.length / 2; i++){
        holder = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = holder;
    }
return arr;
}

console.log(reverse([1,7,11,15,94,54,38]));

// Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repeat(arr){
    newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
return newarr;
}

console.log(repeat([1,7,11,15]));