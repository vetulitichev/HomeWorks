/////////////////////////////////////////////////
let arr =[];
function addToArray(array,newElement) {
    array[array.length] = newElement;
}
let newArr = [1,2,3];
let myObj = {
    DayOfBirth: 19,
    skills:[`1`,`2`,`3`,`4`]
};
addToArray(arr,12);
addToArray(arr,32);
addToArray(arr,'356');
addToArray(arr,'hi');
addToArray(arr,newArr);
addToArray(arr,myObj);

console.log(arr);
/////////////////////////////////////////////////


function simpleObjectGenerator(param1, param2, param3){
    let myObj={};
    myObj.argument1 = param1;
    myObj.argument2 = param2;
    myObj.argument3 = param3;

    return myObj;
}

const testObj={
    test1: 'Vitaly',
    test2: ['12',543]
};
let testVariable = simpleObjectGenerator(12,'hi'.toUpperCase(),testObj);
console.log(testVariable);


//////////////////////////////////////////////////////

let myName = { name: 'Vitaly' };
function addNameToUser(key,keyParam,obj){
    let localObj={};
    localObj.name = myName.name;
    localObj[key]= keyParam;
    return localObj;
}
console.log(addNameToUser('family','Ulitichev',myName));
console.log(myName);

//////////////////////////////////////////////////////////

function fizzBuzz(num) {
    let temp = '';

    if(!(num %3 && num %5)){
        if(!(num %3)){
            temp += 'Fizz';
        }
        if(!(num %5)){
            temp += 'Buzz';
        }
    } else {
        temp = num;
    }
   console.log(temp)
}
// fizzBuzz(12);
fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'
