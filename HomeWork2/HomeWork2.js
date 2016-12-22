

/*
 1. Составить предложение из вышестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 25, 1, команда"
 */

const numbers = [25, 1];
const project = "проект";
const team = `команда`;
const howMuch = "Сколько";
const sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = ` ${howMuch} ${sentence} ${numbers} ${team}`;
console.log(task1);


/*
 2. Составьте предложение из представленного массива и выведите предложение
 в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. Он не был больше ни телом, к которому рано или поздно ..."
 */
const array = ['Он не был больше ни телом, к которому рано или поздно',
    'он обнаружил', 'Так, когда Будда достиг Просветления',
    '...', 'что больше не ощущает себя мишенью'];

let homeSentence =` ${array[2] + array[1] +array[4]}. ${array[0] + array[3]}`;
console.log(homeSentence);


/*
 3. Добавьте свойста 4 новых свойства в объект используя квадратные скобки и точку.
 */


let myObj = {
    DayOfBirth: 19,
    skills:[`1`,`2`,`3`,`4`]
};
myObj.name = 'Name';
myObj.surname = 'Surname'
console.log(myObj);
/*
 4. Используя метод .slice, добавте в недостающие символы в строку
 */

let sliceString = 'Ytube'; //
console.log(`${sliceString[0]}ou${sliceString[1].toUpperCase()+sliceString.slice(2)}`); // YouTube

/*
 5. Преобразуйте строку x, в максимально удобно читаемый вид
 */
const frameworks = [2, 'Angular', 'Angular2', 'React/Redux'];
const res = `Google released new version ${frameworks[2]}. But real speed is  ${frameworks[3]}`;
console.log(res);