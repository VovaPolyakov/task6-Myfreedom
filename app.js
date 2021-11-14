// Задание 1

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// function ucFirst(str) {
//     str[0].toUpperCase();
//     str.slice(1)
//     console.log(str[0].toUpperCase() + str.slice(1));

// }

// ucFirst('вова');


// Задание 2

// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// function checkSpam(str) {
//     if (str.includes('badWord') || str.includes('XXX')) {
//         console.log('ошибка')
//         return true
//     } else {
//         return false
//     }
// }
// checkSpam('fsfsf');

// Задание 3

// Написать функцию, которой на вход подается строка, 
// на выход она дает символы наоборот (разворачивает строку). 
// Пример: «привет Женя» -> «янеЖ тевирп»
// function getStr(str) {
//     console.log(str.split('').reverse().join(''));
// }

// getStr('вова')


// Задание 4

// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. 
// Строки представляют собой трёхбуквенный код станции, 
// затем некоторые машиночитаемые данные, 
// за которыми следует точка с запятой, 
// а затем название станции, 
// пригодное для чтения человеком. 
// let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
// 'GNF576746573fhdg4737dh4;Greenfield',
// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge',
// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль


// let stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];

// function getStr() {
//     for (let i = 0; i < stations.length; i++) {
//         let index = stations[i].indexOf(';')
//         let string = stations[i].slice(0, 3);
//         let secondStr = stations[i].slice(index + 1)

//         console.log(`${string}: ${secondStr}`)
//     }
// }
// getStr();


// Задание 4.1

// Выведите полученные строковые значения на странице в виде списка (ul li) 

// let stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];

// function getStr() {
//     let ul = document.createElement('ul');
//     for (let i = 0; i < stations.length; i++) {
//         let index = stations[i].indexOf(';')
//         let string = stations[i].slice(0, 3);
//         let secondStr = stations[i].slice(index + 1)
//         let li = document.createElement('li');
//         li.innerText = `${string}: ${secondStr}`;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// }
// getStr();

// Задание 5

// Напишите функцию unique(arr), которая принимает массив, 
// а возвращает новый массив, 
// содержащий только уникальные элементы arr.

// Пример:

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"


// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// function unique(strings) {
//     let arr = [];
//     for (let i = 0; i < strings.length; i++) {
//         if (arr.indexOf(strings[i]) == -1) {
//             arr.push(strings[i])
//         }
//     }
//     console.log(arr);

//     return arr;

// }
// unique(strings);