const menu = ["Burger" , "Pizza", "Fries", "Tacos"];
const car = new Array("Mercedes", "Maserati" , "Lamborghini", "Aston Martin");

console.log(menu);
console.log(car);

console.log(menu[3]);
menu.push("Noodles");
menu.pop();
console.log(menu);

console.log(menu.length);
for(i = 0; i<menu.length; i++){
    console.log("I like " + menu[i])
    console.log(menu[i]);
}

myArray = [1,2,3,4,5]
myArrayofobject = [
    {
        "name" : "mark",
        "age" : 18
    },
    {
        "name" : "jacquline",
        "age" : 18
    
    }
]

console.log(myArrayofobject)

let newobject = {
    "name" : "bro",
    "age": 18 
}

myArrayofobject.push(newobject);
console.log(myArrayofobject);