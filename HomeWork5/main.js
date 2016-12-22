
/*
 1. Переместите 0 в конец массива, остальные числа должны остаться неизменными
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
    function zeroMove(arr) {
        let counter = 0;
        for(let i =0; i<arr.length;i++){
            if(arr[i] === '0' || arr[i] ===0){
                arr.splice(i,1);
                counter++;
                i--;
            }
        }
        arr.length = arr.length+counter;
        for(let i = arr.length-counter; i<arr.length;i++){

            arr[i] = 0;
        }

        console.log(arr);
    }
    zeroMove(['a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ]);
/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */
let test =  [0,200,10,25,15];
 function sum(arr) {
     let tmp= 0;
     let min1 = arr[0];
     for(let i =0 ; i<arr.length; i++){
         if(arr[i]<min1){
             min1=arr[i];
             tmp =i;
         }
     }
     arr.splice(tmp,1);
     let min2 = arr[0];
     for(let i =0 ; i<arr.length; i++){
         min2 = Math.min(min2,arr[i])
     }
     return min1 + min2;
 }
console.log(sum(test));
/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShufler(arg) {
    let tmp = '';
    arg = arg.split(' ');
    tmp = arg[0];
    arg[0] = arg[1];
    arg[1] = tmp;
    return arg;
}
console.log(nameShufler('john McClane'));

/*
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */
    function capMe(arr) {
        arr.forEach(function (item,i) {
            let tmp = arr[i];
            tmp = tmp[0].toUpperCase()+ tmp.slice(1).toLocaleLowerCase();
            arr[i] = tmp;
        });
        return arr;
    }
   console.log(capMe(['jo', 'nelson', 'jurie']));

// 1.ПРИЛОЖЕНИЯ ТЕЛЕФОННЫЙ СПРАВОЧНИК.
/*
 Представьте себе удобное для вас приложение телефонного справочника.
 Пропишите функционал который по вашему должен
 вот такой справочник содержать.
 Обязательные поля:
 - Имя
 - Фамилия
 - Частное лицо или Юридическое лицо
 - номера телефонов. Домашний,Рабочий, Личный
 - Аккаунты в социальных сетях
 */


/*
 1. Создайте Массив который будет содержать 5 ваших друзей и 2-3 компании чьими услугами вы пользуетесь.
 - Доработать структуру пользователя согласно того как вы представляете себе
 телефонный справочник из первого домашнего задания
 - Создайте переменную Users
 */
let User ={};
User = {
    Name: ``,
    Surname: ``,
    userType:{
        privat: true,
        legal : false
    },
    phoneType:{
        home: true,
        work: false,
        personal: false
    },
    accaunts: [``,``]
};
//@SUPER
/*
 1. Найдите Число отсутствующее в заданной последовательности

 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24

 [4,6,8,10] => 2

 */
function num(arr) {
    let difference;
    for (let i = 0; i < arr.length; i++) {
        difference = arr[i + 1] - arr[i];
        if (arr[i + 1] + difference == arr[i + 2]) {
            console.log("dif = " +difference);
            break;
        }
    }

        for (let i = 0; i < arr.length; i++) {
            if (i == arr.length - 1) {
                return difference;
            }
            else if (arr[i + 1] !== arr[i] + difference) {
                return arr[i] + difference;
            }
        }
}
console.log(num( [4,6,8,10]));
console.log(num( [0,8,16,32]));
console.log(num([0,16,24,32]));
/*
 2. Напишите функция которая преобразовывает открывает скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов

 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]


 */

let res =[1];
let help =[[1,2],[3,[4]],5, 10];
let i =help.length;
function asd(arr) {
    if(i==3 ){return arr[0]}
    return res = res.concat(asd(arr[i-1]));

}
console.log(asd(help));


