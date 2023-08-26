//Вивести суму лише парних чисел у діапазоні від 30 до 80

let result = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
          result += i;
    }  
}
document.write(result);