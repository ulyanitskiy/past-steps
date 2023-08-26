//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let result = '';
let resultQuantity = 0;
let resultSum = 0;
let num = 8;
let isNum = prompt('Введите число', num);
for (let i = 1; i <= isNum; i++) {
    if (isNum % i === 0) {
        result += ` ${i}, `;
    }  
}
document.write('Делители: ', result);

//Определить количество его четных делителей и их сумму
for (let i = 1; i <= isNum; i++) {
    if (isNum % i === 0 && i % 2 === 0) {
        resultQuantity += 1;
        resultSum += i; 
    }
}
document.write('Количество четных делителей: ', resultQuantity, '. ');
document.write('Сумма четных делителей: ', resultSum, '.');
