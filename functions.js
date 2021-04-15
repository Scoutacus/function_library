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