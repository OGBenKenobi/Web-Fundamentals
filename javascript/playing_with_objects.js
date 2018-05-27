//Imagine that you are given an array of objects.  For example,

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//How would you print/log John's age?

console.log(users[1].age)

//How would you print/log the name of the first object?

console.log(users[0].name)

//How would you print/log the name and age of each user using a for loop?  Your output should look something like this

Michael - 37
John - 30
David - 27

//My algorithm

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

for(var info in users){
    x = users[info].name;
    y = users[info].age;
    console.log(x, "-", y)
}
