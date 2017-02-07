/*
 TASK 0
 Проверьте что строка содержит все символы от "a" до "z"
 solution("wyyga") // false
 solution("qwertyuioplkjhgfdsazxcvbnm") // true
 solution("ejuxggfsts") // false
 solution("qpwoeirutyalskdjfhgmznxbcv") // true
 solution("0123456789abcdefghijklmnop") // false
 */
// function solution(str) {
//     console.log(//g.test(str));
// }
// solution("wyyga") ;// false
// solution("qwertyuioplkjhgfdsazxcvbnm"); // true
// solution("ejuxggfsts"); // false
// solution("qpwoeirutyalskdjfhgmznxbcv"); // true
// solution("0123456789abcdefghijklmnop"); // false

/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов

 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [{:a "b"}]]] => [1, 2, {:a "b"}]

 */

/*
 Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
 Первый макет.
 https://github.com/ilyaphilin/referenceBook/blob/dev/index.html
 Второй макет.
 https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
 Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
 */
class Table {
    constructor(){
        this.arr =[];

        this.tableHead = {
            name:'Name',
            surname:'Surname',
            email:'Email'
        };

    this.table = this.new('table');
    this.tbody = this.new('tbody');
    this.thead = this.new('thead');
    this.main = document.querySelector('main');

    }
    new(str){
        return document.createElement(str);
    }
    getOldTable() {
        let arr = [];
        let body = document.body;
        let table = document.querySelector('tbody');
        for (let i = 0; i < table.rows.length; i++) {
            let col = table.rows[i];
            this.arr[i] = [];
            for (let y = 0; y < col.cells.length; y++) {
                this.arr[i][y] = col.cells[y].textContent;
            }
        }
        return this;
    }
    newTableBuildingThead(){
        const tr = this.new('tr');
        for (let item in this.tableHead){
            const th = this.new('th');
            th.textContent = this.tableHead[item];
            tr.append(th);
        }
         this.thead.append(tr);
    }
    newTableBuildingTbody(){
    for(let i =0;i<this.arr.length;i++){
        const tr = this.new('tr');
        let tmp = this.arr[i];
        for(let y=0;y<tmp.length;y++){
            const td = this.new('td');
            td.textContent = tmp[y];
            tr.append(td);
        }

        this.tbody.append(tr);
    }
    }
    render(){

        this.newTableBuildingThead();
        this.newTableBuildingTbody();

        this.table.append(this.thead);
        this.table.append(this.tbody);
        this.main.appendChild(this.table);

    }


}
let newTable = new Table();
newTable.getOldTable().render();