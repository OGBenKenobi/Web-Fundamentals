// Given an array and a value Y, count and print the number of array values greater than Y.

function greater(x,y){
    count = 0;
    for(var i = 0;i<x.length;i++){
        if(x[i] > y){
            count += 1;
        }
    }
    return count;
}

console.log(greater([1,2,3,4,5], 2));

// Given an array, print the max, min and average values for that array.

function minMax(arr){
    var sum = 0, min = arr[0], max = arr[0], avg = 0;
    for(var i = 0;i<arr.length;i++){
        sum = sum + arr[i];
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    avg = sum / arr.length; 
    console.log(min);
    console.log(max);
    return avg;   
    
}

console.log(minMax([1,2,3,4,5]))

//Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function num(arr) {
    newarr = [];
    for(var i = 0;i<arr.length;i++){
        if(arr[i] < 0){
            newarr.push("Dojo");
        }
        else {newarr.push(arr[i]);
        }
    }
    return newarr; 
}

console.log(num([1,10,-5,-7,5,-1]));

//Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function splice(arr,x,y){
    count = y - x +1;
    arr.splice(x,count);
    return arr;
}
 
console.log(splice([5,1,7,6,3,4,9,8],0,5));