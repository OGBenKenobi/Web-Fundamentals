var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

for(var info in users){
    x = users[info].name;
    y = users[info].age;
    console.log(x, "-", y)
}
