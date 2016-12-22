/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    let localArr = [];
    let i = 0;
    for (;a<b-1;a++){
        localArr[i]= a+1;
        i++;
    }
    return localArr;
}

console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

function fizzBuzz100() {
    for (let num = 0; num<=100;num++) {
        let tmp = '';


        if (!(num % 3)) {
            tmp += 'Fizz';
        }
        if (!(num % 5)) {
            tmp += 'Buzz';
        }
        if (!tmp.length) {
            tmp = num;
        }
        console.log(tmp);
    }
}
fizzBuzz100();
/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */


let array1 = Array.from({ length: 35 }).map((value, index) => index % 2 ? { age: index + 2 } : { age: NaN });
// console.log(array); //[ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
// console.log(array.length); // 35

function arrTypes(newArr) {
    let localArr = [];

    newArr.forEach(function (item, i, arr) {
        if (isNaN(item.age)) {
            localArr[i] = NaN;
        } else {
            localArr[i] = typeof item.age
        }
    });
    return localArr;
}

console.log(typeof NaN);
console.log(arrTypes(array1));
/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, тогда добавляет данному объекту свойство unknownAge: true
 Далее создайте новый массив содержащий все объекты есть свойство unknownAge:true
 */
let array = Array.from({ length: 35 }).map((value, index) => index % 2 ? { age: index + 2 } : { age: NaN });
function arrTypesSuper() {
    let localArr = [];
    let iterator = 0 ;

    array.forEach(function (item, i, arr) {
        if (isNaN(item.age)) {
            array[i].unknownAge = true;
            localArr[iterator] = array[i];
            iterator++;
        }
    });
    return localArr;
}
console.log(array);
console.log(arrTypesSuper(array));