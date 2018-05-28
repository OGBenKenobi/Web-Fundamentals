function repeat(arr){
    newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
return newarr;
}

console.log(repeat([1,7,11,15]));