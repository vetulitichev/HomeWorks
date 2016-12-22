/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные ей аргументы,
 * и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * */

function solution1() {
   let str = '';
   return function (arg) {
       return str+=arg + ' ';
   }
}

let stringBuffer = solution1();

console.log(stringBuffer('Замыкания')); //Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('ПРивет')); // Замыкания Использовать нужно ПРивет


/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку из скобочек и посчитайте,
 * что все скобочки закрываются корректно
 *
 * */
 function validBraces(...args) {
     args = args.join('');
     console.log(args);
      let stack = [];
      //let tmp;
     let flag;
     function init (bracket) {
        switch (bracket){
            case '(':
                return '{';
            break;

            case ')':
                return ')';
            break;

            case '[':
                return '[';
            break;

            case ']':
                return ']';
            break;

            case '{':
                return '{';
            break;

            case '}':
                return '}';
            break;

        }
     }
     function push(stack,item) {
         let tmpArr = stack;
         for (let i = 0 ; i<stack.length;i++){
                stack[i+1] = tmpArr[i];
         }
         stack[0] = item;
         console.log(stack);
     }

     for(let i = 0; i<args.length;i++){
         //tmp = init(args[i]);
         if(stack[i] == args[i]){
             args.splice(i,2);
             flag = true;
         }else {
             push(stack,args[0[i]]);
         }
     }
    // console.log(stack);
 }

 validBraces('()');

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию,
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */


 // function makeCallback(fn) {
 //     for (let i = 1; i <= 10; i++) {
 //        setTimeout(function() {
 //             console.log(i);
 //            if(i == 10){
 //                 return fn();
 //             }
 //         }, i * 1000)
 //     }
 //
 // }
 //
 // makeCallback(function() {
 //     console.log('THE LAST LAST comment')
 // });

// // @SUPER
//
// /*
//  *
//  * Напишите функцию которая будет принимать одно число и выводить сумму всех натуральных чисел
//  * sum(5) //5+4+3+2+1
//  * Вычисления должны кешироваться, если в функцию попадает закешированное значение, в консоле должно отобразиться
//  * Значение взято из кэша
//  *
//  * */
//

let cash  ={
    num: 0,
    res : 0
};
function sum(num) {
    let res = 0;
    if(cash.num == num){
        return cash.res + ' Взято из кеша';
    } else {
        for (let i=0;i<=num;i++){
            res +=i;
        }
        cash.num = num;
        cash.res = res;
        return cash.res + ' Кешировано';
    }
}



sum(5); // 15 Кешировано
sum(5); // 15 Значение взято из кэша
sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша