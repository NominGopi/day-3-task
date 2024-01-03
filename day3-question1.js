// (1). How to compare two JSON have the same properties without order?
//      a). let obj1 = { name: "person1" , age:5 };
//      b).let obj2 = { age:5, name: "person1" }; 

var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };

var jsonString1 = JSON.stringify(obj1);
var jsonString2 = JSON.stringify(obj2);

if (jsonString1 === jsonString2) {
    console.log("false");
} else {
    console.log("true");
}