/**
 * Created by Vitaly on 25/12/2016.
 */

/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;
let z = (t) => {
    let y = 10;
    return t();
};
z(x);
// 1 - создётся переменная. 2 - создаётся переменная x и присваивается функция без пааметров и возвращается значение y (y= 5);
// 3 - создаётся перемення z и ей присваивается функция с параметром t. В локалскопе создаётся локальная переменная y (y=10);
// возвращается t как вызванная функция (тоесть вернётся результат выполнения функции t)
// вызывается фугкция z с параметром x в котором возвращается y = 10 ... Думаю резултатом будет 5 потому мы работаем с глобальной y;
/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

// let $ = function() {
//     return `<${arguments[0]}></${arguments[0]}>`
// };
//
// let createBODY = $('body');
// let createDIV = $('div');
// console.log(createBODY); //<body></body>
// console.log(createDIV); //<div></div>


/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
 * *
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки

 ezjQuery.add('body')
 // <body></body>

 *
 *
 *
 * */

//let ezJquery = function() {
//
//
//  return {
//
//  }
//};

let ezjQuery = {
    str : '',
    add(tag,item =' ') {
        this.str = this.str.split('');
        this.str.splice(this.str.indexOf(' '),1,`<${tag}>${item}</${tag}>`);
        this.str = this.str.join('');
        return this
    },
    render() {
        let tmp = this.str;
        this.str ='';
        return tmp;
    }

};

// ezjQuery.add('body') // <body></body>  * в консоле
//      .add('div') //<body></body><div></div>
//      .add('hello') //<body></body><div></div><hello></hello>
//      .add('li').render(); //<body></body><div></div><li></li>
let helloList = ezjQuery.add('body') //<body></body>
    .add('div') //<body><div></div></body>
    .add('ul') //<body><div><ul></ul></div></body>
    .add('li','Hello') //<body><div><ul><li>Hello</li></ul></div></body>
.render();
console.log(helloList) ;// <body><div><ul><li>Hello</li></ul></div></body>

let bodyDiv = ezjQuery.add('body') //<body></body>
    .add('div') //<body><div></div></body>
    .render();
console.log(bodyDiv);//<body><div></div></body>
console.log( ezjQuery.add('h1', 'hello friend').add('ul', 'spisok').add('li', ' ').add('li', 'zxc'));
document.write(helloList);
/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри предыдущего !
 * И добавьте объекту ezjQuery метод render, который будет возвращать сгенерированную строку
 * Методу new, второй параметр, который будет размещать информацию внутри тэга
 *
 *
 example
 var helloList = ezjQuery.add('body') //<body></body>
 .add('div') //<body><div></div></body>
 .add('ul') //<body><div><ul></ul></div></body>
 .add('li', 'Hello'); //<body><div><ul><li>Hello</li></ul></div></body>
 .render()
 console.log(helloList) // <body><div><ul><li>Hello</li></ul></div></body>
 Обратите внимание, что при создании следующей переменной создание строки началось сначала

 var bodyDiv = ezjQuery.add('body') //<body></body>
 .add('div') //<body><div></div></body>
 .render()
 console.log(bodyDiv) //<body><div></div></body>

 */


// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $. Создание перевого метода должено быть без метода
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 *
 *
 * */

let  $ = class {
    constructor(str=''){
        this.str = `<${str}> </${str}>`;
        //console.log(this.str);
    }
    add(tag,item =' ') {
        this.str = this.str.split('');
        this.str.splice(this.str.indexOf(' '),1,`<${tag}>${item}</${tag}>`);
        this.str = this.str.join('');
        return this
    }
    render() {
        let tmp = this.str;
        this.str ='';
        tmp;
        return tmp;
    }

};
 let asd = new $('body').add('li', 'hi').render();
document.write(asd);