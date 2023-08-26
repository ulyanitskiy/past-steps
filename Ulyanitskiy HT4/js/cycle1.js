//Вивести на сторінку в один рядок через кому числа від 10 до 20

let i = 10;
do {
    document.write(` ${i}, `);
    i++;
} while (i < 20);
document.write(` ${i}.`);



/*let result = "";
for (let i = 10; i <= 20; i++) {
    if (i === 20) {
          result += ` ${i}`;
    continue;  
    }
   result += `${i},`; 
}
document.write(result);*/