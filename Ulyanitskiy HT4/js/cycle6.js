//Знайти середнє арифметичне всіх цілих чисел від 1 до 500 

let summ = 0;
let i;
for (i = 0; i <= 500; i++) {
summ += i;
}
let medium = summ / i;
document.write(medium);