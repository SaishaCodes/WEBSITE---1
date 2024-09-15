var myname = "saisha"
function showmyname(){
    
    alert(myname);
}

function print(){
    alert("hey" + myname + " how are you da");
}

function sum(a,b){
    return parseInt(a) + parseInt(b);
}

alert(sum(10, 15));

let sumfunc = (arg1, arg2) => parseInt(arg1) + parseInt(arg2);
alert(sumfunc(25, 15));