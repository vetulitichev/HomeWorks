/*
 TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
 */
 function solution(arr) {
     let res=[];
    let localObj={};
    arr.forEach(function (item,i) {
        if(localObj[item]== undefined){

            localObj[item] = 1;
        } else {
            localObj[item]+=1;
        }
    });
    console.log(localObj);
        for(let i in localObj){
            if((localObj[i])%2){
                res.push(i);
            }
        }
        console.log(res);

 }
 //
 solution([12, 23, 34, 12, 12, 23, 12, 45])// -> [34 45]
 solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,])// -> [4 100 5000]
 solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9])// -> [6 5 9 21]
 solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42])// -> [8 16 23 42]
 solution([2, 2, 44, 44])// => []



const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* TASK - 1
 Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 

 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам

 Сделайте несколько экземпляров данной функции
 *
 *
 * */
str = str.replace(/is/g,'').replace(/ /,' hot').replace(/hot[ ]*/g,'hot ');

const myRegExp = (str, homeDir, appDir, appName) => {
    str = str.replace(/[%]*HOMEDIR[%]*/g,`${homeDir}`).replace(/[%]*APP_DIR[%]*/g,`${appDir}`).replace(/[%]*APPNAME[%]*/g,`${appName}`).replace(/js[.]js/g,'js');
   return str
};

console.log(myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js'));



/*
 TASK - 2 
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги
 */






/* TASK 3
 JavaScript =>
 Создать объект с методами, которые будут динамически генерировать DOM. 
 Это будет тест, который мы будем разрабатывать в следующих заданиях. 
 Сейчас вам нужно только динамически создать html, 
 методы должны храниться в одном объекте. Для того чтоб страница выглядела красиво можете использовать Bootstrap 
 и создавать DOM-элементы с готовыми бутстраповскими классами. 
 Изначально на странице должен быть только <body>, вызывая методы объекта нужно создать dom-элементы
 */

let app ={
  render(){
      //TEXT
      const input_1 = document.createElement('input');
      input_1.setAttribute('type','checkbox');
      const input_2 = document.createElement('input');
      input_2.setAttribute('type','checkbox');
      const input_3 = document.createElement('input');
      input_3.setAttribute('type','checkbox');
      const input_4 = document.createElement('input');
      input_4.setAttribute('type','checkbox');
      const input_5 = document.createElement('input');
      input_5.setAttribute('type','checkbox');
      const input_6 = document.createElement('input');
      input_6.setAttribute('type','checkbox');
      const input_7 = document.createElement('input');
      input_7.setAttribute('type','checkbox');
      const input_8 = document.createElement('input');
      input_8.setAttribute('type','checkbox');
      const input_9 = document.createElement('input');
      input_9.setAttribute('type','checkbox');

      const lable_1 = document.createElement('lable');
      const lable_2= document.createElement('lable');
      const lable_3= document.createElement('lable');
      const li_1 = document.createElement('li');
      const li_2 = document.createElement('li');
      const li_3 = document.createElement('li');
      const button = document.createElement('input');
      const body = document.body;
      const p = document.createElement('p');
      const ol = document.createElement('ol');
      button.setAttribute('type','button');
      button.setAttribute('value','Проверить мои результаты');
      p.textContent = 'Тест по программированию';
      p.setAttribute('align','center');

//First Question

      li_1.appendChild(document.createTextNode("First question"));
      li_1.appendChild(document.createElement('br'));
      lable_1.appendChild(input_1);
      lable_1.appendChild(document.createTextNode('First answer'));
      lable_1.appendChild(document.createElement('br'));

      lable_1.appendChild(input_2);
      lable_1.appendChild(document.createTextNode('Second answer'));
      lable_1.appendChild(document.createElement('br'));

      lable_1.appendChild(input_3);
      lable_1.appendChild(document.createTextNode('Third answer'));
      lable_1.appendChild(document.createElement('br'));


//Second Question
      li_2.appendChild(document.createTextNode("First question"));
      li_2.appendChild(document.createElement('br'));
      lable_2.appendChild(input_4);
      lable_2.appendChild(document.createTextNode('First answer'));
      lable_2.appendChild(document.createElement('br'));

      lable_2.appendChild(input_5);
      lable_2.appendChild(document.createTextNode('Second answer'));
      lable_2.appendChild(document.createElement('br'));

      lable_2.appendChild(input_6);
      lable_2.appendChild(document.createTextNode('Third answer'));
      lable_2.appendChild(document.createElement('br'));

//Third Question
      li_3.appendChild(document.createTextNode("First question"));
      li_3.appendChild(document.createElement('br'));
      lable_3.appendChild(input_7);
      lable_3.appendChild(document.createTextNode('First answer'));
      lable_3.appendChild(document.createElement('br'));

      lable_3.appendChild(input_8);
      lable_3.appendChild(document.createTextNode('Second answer'));
      lable_3.appendChild(document.createElement('br'));

      lable_3.appendChild(input_9);
      lable_3.appendChild(document.createTextNode('Third answer'));
      lable_3.appendChild(document.createElement('br'));

      body.appendChild(p);
      body.appendChild(ol);


      ol.appendChild(li_1);
      li_1.appendChild(lable_1);
      ol.appendChild(li_2);
      li_2.appendChild(lable_2);
      ol.appendChild(li_3);
      li_3.appendChild(lable_3);
      body.appendChild(button);
  }
};
 app.render();