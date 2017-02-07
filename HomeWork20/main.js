/*
 Даны строки разделенные различным образом,
 верните строки разделенные / или _, в нижнем регистре
 solution("ActiveModel::Errors") => active_model/errors"
 solution("HelloHowAreYou") => "hello_how_are_you"
 solution("MyNAMEIsBONDJamesBond") => my_name_is_bond_james_bond"
 solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
 */
function solution(str){


    str = str.replace(/::/g,'/');
    while(str.search(/[A-Z][a-z]/)!==-1){
        let match = str.match(/[A-Z][a-z]/);
        let index = str.search(/[A-Z][a-z]/);
        str = str.split('');
        str.splice(index, match.length + 1, '_' + match[0].toLowerCase());
        str = str.join('');
        console.log(str);

    }
    // if(str[0] == '_'){
    //     str = str.split('');
    //     str.splice(0,1);
    //     str = str.join('');
    // }
    str = str.toLowerCase();
    //console.log(str);

    // let find =str.indexOf(/[a-z][A-Z]/);
    //
    //     console.log(find);
    //
    // str.forEach((item,index,arr)=>{
    //
    //     //console.log(item,index,arr);
    // });

    // let copy = str;
    // while (str.search(/[a-z][A-Z]/)!==-1){
    //     copy = str;
    // copy = copy.split('');
    // copy.splice(str.search(/[a-z][A-Z]/) + 1, 0, '_');
    // copy = copy.join('');
    // str = copy;
    // }
    //  //if(str.search(/[a-z][A-Z]/)) {
    //     //console.log(str.search(/[a-z][A-Z]/));
    //     console.log(str);
    //}
    //for(let i=0;i<str.length;i++){
       //let tmp = str.indexOf();
       //console.log(copy);
    //}
    // str = str.replace(/::/g,'/')//.replace(/[a-z][A-Z]/,'');
    // let index = str.search(/[a-z][A-Z]/);
    // str = str.split('')//.splice(index,0,'_');
    // console.log(str);
}
solution("ActiveModel::Errors");
solution("HelloHowAreYou");
 solution("MyNAMEIsBONDJamesBond");
solution("MAINCompany::BEST-MAINUser");
/*
 Сделайте таблицу 5x5
 При клике на элемент, изменяйте цвет у элемента на красный.
 Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
 Пример 3х3:
 []|[]|[]
 []|[]|[]
 []|[]|[]
 кликаем сюда ->[]|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут

                 []|[]|[]
 кликаем сюда -> []|[]|[x] <- загорается тут
                 []|[]|[x]
 */

function table() {
      let table = document.body.querySelector('table');
    for(let i=0;i<table.rows.length;i++){
        for(let y=0;y<table.rows[i].cells.length;y++){
            table.rows[i].cells[y].onclick = function(event){
                let rowLength = table.rows.length-1;
                let cellLength = table.rows[i].cells.length-1;
                console.log('row:'+i,'col:'+y);
                table.rows[rowLength-i].cells[cellLength-y].style.backgroundColor = 'red';

            }
        }
    }

}
table();