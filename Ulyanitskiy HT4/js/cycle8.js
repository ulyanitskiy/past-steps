//Вивести всі числа в діапазоні від 100 до 200 кратные 3

let result = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
          result += ` ${i}, `;
    }  
}
document.write(result);