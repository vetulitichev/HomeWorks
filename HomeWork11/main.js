

/*
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object<Object> {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */
let ctx ={};
let next = function () {
  return this;
};
function Http() {
    this.createServer = function (fn) {
        console.log(ctx);
        console.log(fn);
        return this;
    };
    this.listen = function (PORT,host) {
        this.fn();
        return this;
    };
    return this
}
const server = new Http().createServer(function (ctx,next) {
    //console.log(this);
    console.log(ctx);
}).listen(3000,'localhost');
//const server = new Http().createServer().listen(3000, 'localhost');

// TASK 1
//Создать класс Human, у которого будут свойства обычного человека: имя, возраст, пол, рост, вес.
//Используя прототипное наследование создать дочерние классы Worker (дописать в них поля места работы, зарплатой, метод "работать")
//и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
//Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human



// class Human {
//
//     constructor(name,age,sex,growth,weight){
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//         this.growth = growth;
//         this.waight = weight;
//     }
//
// }
//
// class Worker extends Human {
//     constructor(workPlace,price){
//        super();
//        this.workPlace = workPlace;
//        this.price = price;
//     }
//     doWork(){
//         console.log('working...')
//     }
// }
// class Student extends Human {
//     constructor(institution,scholarship){
//         super();
//         this.institution = institution;
//         this.scholarship = scholarship;
//     }
//
//     watchSerials(){
//         console.log('watching serials...')
//     }
// }
//
// let me = new Worker("EasyCode",100000);
// let you = new Student('NURE',750);
// me.doWork();
// you.watchSerials();
// console.log(me);
// console.log(you);

// @SUPER

/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 *
 * */