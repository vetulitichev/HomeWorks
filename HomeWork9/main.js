/**
 * Created by Vitaly on 22/12/2016.
 */
// TASK 1
// Отобразите достаточно ли developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого разработчика метод goodDev
/*
 Количество требований к разработчику совпадает с его навыками.

 * Используйте в задаче this
 * */

let developer1 = {
    skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
    requires: ['Node.js', 'JavaScript', 'OOP'],
    get: function () {
        return this.skills;
    },
    goodDev
};
let developer2 = {
    experience: [{ technology: 'java' }, { technology: 'c++' },
        { technology: 'aws' }, { technology: 'docker' }],
    requires: ['java', 'json', 'c++', 'JavaScript'],
    get: function () {
        let arr = [];
        this.experience.forEach(function (item,i) {
            arr[i] = item.technology;
        });
        return arr;

    },
    goodDev
};

  function goodDev(dev) {
     let skill = this.get();
    this.requires.forEach(function (item,i) {
        if(skill.indexOf(item)){
            console.log(`${item} ... success`)
        } else {
            console.log(`${item} ... fail`);
        }
    })

 }
developer1.goodDev();
developer2.goodDev();



/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми свойстами и разными значениями!
 * Создайте функция которая сортирует объект по заданному свойству
 * При вызове функции используйте this
 *
 *
 * */
let collection = [{age:15, name:'b'}, {age:10, name:'c'}, {age:25, name:'a'}];

 collection.myFilter = function (arg) {
     let arr = this;
     for(let i = 0; i<arr.length-1;i++) {
         if (i !== arr.length-1) {
             if (arr[i][arg] > arr [i + 1][arg]) {
                 let tmp = arr[i + 1][arg];
                 arr[i + 1][arg] = arr[i][arg];
                 arr[i][arg] = tmp
             }
         } else {
            break;
         }
     }
     console.log(arr);
};

collection.myFilter('age');
collection.myFilter('name');
//{age:10, name:'b'}, {age:15, name:'c'} {age:25, name:'A'}

// myObject.myFilter('age');
// myObject.myFilter('name');
//
//
// /*
//  *
//  * TASK 3
//  *
//  *
// Данные будут хранится в БД! Функционал 1)(поиск по любому изи полей(имя, фамлия, номер), 2)сортировка по любому из полей)
//  * Добавление,удаление, редактирование.
// Функция : "добавить картинку к контакту" и "загрузить/выгрузить существующий справочник"
//
//  * */
//
//
//
// ////////@ TODO -- LVL Strong Junior
// /*
//  *
//  * TASK 2
//  * Напишите функцию которая принимает 3 аргумента:*
//  *
//  *  - объект к которому привязывается метод
//  *  - Имя свойства с коьторым связывается метод
//  *  - Объявление привязываемого метода( функция )
//  *
//  *
//  *  Если количество аргументов у функции fn совпадает сохраняет метод в замыкании
//  *  и привязывает функцию к методу объекта
//  *
//  *  при вызове одного и того же метода с разным количеством аргументов, должно давать различный результат
//  *
//  * */
//
// let junior = {};
//
// // fn.length ==
//
// function addMethod(object, name, fn) {
//
// }
//
//
// addMethod(junior, 'ok', function() {console.log(arguments.length)});
// addMethod(junior, 'ok', function(one) {console.log(arguments.length)});
// addMethod(junior, 'ok', function(one, two) {console.log(arguments.length)});
// addMethod(junior, 'ok', function(one, two, three) {console.log(arguments.length)});
//
// junior.ok(1);
// junior.ok(1, 2);
// junior.ok(1, 2, 3);