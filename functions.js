function squared(num){
    return num * num;
}

function cubed(num){
    return num * num * num;
}

function circumference(num){
    return (num * 2) * 3.14;
}

function isArray(x) { //tests for an array without using typeof (for older browsers that don't have isArray() already)
    return x.constructor.toString().indexOf("Array") > -1;
}

linearCongruentialGenerator = function(){ //generates a random number name of function is name of the algorithm
    let a = 1024;
    let m = 222;
    let c = 10139302;
    X = (a * X + c) % m;
    return X;
}

const reverseString = function(firstWord) { //returns a string in reverse.
    reverseWord = firstWord.split("")

    reverseArray = reverseWord.reverse();

    joinArray = reverseArray.join("");

    return joinArray;
}

function addElement(){
    var item = document.createElement("div");
    document.getElementById("").addElement()
}
