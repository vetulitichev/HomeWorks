// TASK 1
//Создать класс Human, у которого будут свойства обычного человека: имя, возраст, пол, рост, вес.
//Используя прототипное наследование создать дочерние классы Worker (дописать в них поля места работы, зарплатой, метод "работать")
//и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
//Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

function Human(name ,age,sex,growth,weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.growth = growth;
    this.waight = weight;
}
function Worker(workPlace,price) {
    this.workPlace = workPlace;
    this.price = price;
    this.doWork = function () {
        
        console.log('working...')
    }
}
function Student(institution,scholarship) {
    this.institution = institution;
    this.scholarship = scholarship;
    this.watchSerials = function() {
        console.log('watching serials...')
    }
}

Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);
let me = new Worker("EasyCode",100000);
let you = new Student('NURE',750);
me.doWork();
you.watchSerials();
console.log(me);
console.log(you);

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

// let startTimer = () => {
//     let timer = 10000;
//     let serverResponse = (i) => {
//         return setTimeout(function() {
//             console.log('zzzz');
//             console.log(i);
//         }, timer = timer * 2);
//     };
//     for (let i = 10; i >= 1; i--) {
//         serverResponse(i);
//     }
// };
//
// console.log(startTimer());



class DataBase {
    constructor(){
        this.flag = false;
    }
    query(){
        if(this.flag){
            clearInterval(this.activeTimer());
            this.asd();
        }else {
            this.asd();
        }
    }
    asd(){
        let timer = 1000;
        this.serverResponse = (i) => {
        return setTimeout(function() {
            console.log(i);
        }, timer = timer+1000);
    };
        for (let i=5;;i--){
            this.activeTimer = this.serverResponse(i);
            if(i==0){
                break;
            }
        }
        this.flag = true;
    }


}


let dataBase = new DataBase();
dataBase.query();


// setTimeout( arg1 = setInterval(dataBase.count,1000),5000);