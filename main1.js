// Необходимо создать html-страницу с названием index.html, в которой подключить файл main.js (его тоже необходимо создать рядом с html-файлом). 
// В js-файле необходимо создать следующий скрипт:

// Cоздать функцию greeting, которая принимает в качестве параметра имя человека и выводит приветствие, 
// используя переданное ей имя, в консоль.

// Необходимо продемонстрировать работу функции: у пользователя запросить его имя и вызвать функцию greeting, 
// передав туда полученное от пользователя значение.

// const username = prompt('Enter name');
// function greeting(name) {
//     console.log(`hello, ${name}`);
// }
// greeting(username);

// const kirill = prompt('имя кирилл');
// const username = prompt('Введите имя пользователя:');
// function greeting(name){
//     console.log(`Добро пожаловать, ${name}!`);
// }
// greeting(kirill);
// greeting(username);

function greeting(){
    let name = prompt('Введите имя пользователя:');
    console.log(`Добро пожаловать, ${name}!`);
}
greeting()
