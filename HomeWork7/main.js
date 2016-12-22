/*
 *
 * TASK 2
 *
 * Напишите функцию которая будет вызываться трижды и складывать все передаваемые ей числа
 *
 *
 * */

 function add1(arg1) {
     function add2(arg2) {
         function add3(arg3) {
             return arg3+arg2+arg1;
         }
         return add3;
     }
     return add2;
 }

 console.log(add1(1)(2)(3));
// function test() {
//     return [1,2,3]
// }
//
// console.log(test()[0]);

/*
 *
 * TASK 3
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * так же у функции должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объетке, нельзя
 *
 * */

// function solution3() {
//     let obj = {};
//     let num  = 0;
//         obj.method = function () {
//              num +=1;
//              return num;
//         };
//         obj.zero = function(){
//           num = 0;
//           return num;
//         };
//
//     return obj
// }
//
// let test = solution3(''); // 0
// test.method(); //1
// test.method(); //2
// test.method(); //3

// @SUPER

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода( функция)
 *
 *  При вызове метода отобразите сумму передаваемых параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */



 let jun = {};

function methodCounter(obj, name, num, fn) {
    let counter = num;
    obj[name] = function (...args) {

        return fn;
    }
}
methodCounter(jun, 'logger', 2, function(...arg) {
         return arg.reduce(function (number, element) {
            number += element;
            return number;
        }, 0);
});
//console.log(jun);
jun.logger(1, 2, 3, 4); //2, 10
jun.logger(5, 5, 5, 5); //1, 20
jun.logger(5, 5); //ERROR ! add more methods


// @SUPER - PUPER,
/*
 * Добавьте функции methodCounter, возможность добавлять счетчик вызовов
 * */


/*
 *
 * TASK 1
 * Напишите функцию которая будет принимать 2 аргумента, массив и еще одну функцию,
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment', отобразилось в консоле последним
 *
 * */


// function makeCallback(fn) {
//  for (let i = 1; i <= 10; i++) {
//    setTimeout(function() {
//      console.log(i);
//    }, Math.round(Math.random() * 10))
//  }
//  return fn;
// }
//
// makeCallback(function() {
//  console.log('THE LAST LAST comment')
// });
