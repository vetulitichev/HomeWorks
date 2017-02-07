
/*
 TASK 0
 Вам дано предложение, верните массив из слов, которые длинее чем средняя длина всех слов.
 Слова разделены пробелами, если в предложении запятые, они должны быть пропущены
 solution(["This is a sample string"]) expected ["This" "sample" "string"]
 solution(["Some another sample"]) expected ["another" "sample"]
 solution(["Do, do, do, do... do it!"]) expected []
 */

function solution(arg) {
     let sentense = arg[0].replace(/[(\.),!]/g,'').split(' ');
    sentenseSymbolsAvaregeValue = Math.round(sentense.join('').length/sentense.length);
    sentense = sentense.filter(item=>{return item.length>=sentenseSymbolsAvaregeValue?item:''});
    console.log(sentense);

}
solution(["This is a sample string"]);
solution(["Some another sample"]);
solution(["Do, do, do, do... do it!"]);
/* TASK 1-2-3
 Нужно визуализировать keypad.html -> keypad.js
 Нужно визуализировать index.html -> app.js
 Структура виртуализации:
 - header - один блок
 - main - второй блок
 innerHTML по максимуму
 https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
 Сделайте чтобы при нажатии на кнопку цифра отобразилась в <span class="numbers">
 */


/*
 https://aleksandra-maslennikova.github.io/telephone-book/index.html
 По клику по заголовку таблицы, таблица сортировалась по соответствующему свойству
 */