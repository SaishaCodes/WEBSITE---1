let coffee = {
    color: 'white',
    size : 'm',
    hasSauccer: true,
    print : function(){
        console.log("i love coffee");
    }
};

console.log(coffee);

if(coffee['hasSauccer']== true){
    console.log("Has ");
}

coffee.print();
console.log(coffee.name);
console.log(coffee);

coffee.year = 2024;

coffee.color = 'brown';
console.log(coffee);