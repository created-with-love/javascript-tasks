/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

const minSalary = 500;
const maxSalary = 5000;
const employees = 8;
let totalSalary = 0;

//  Твой код

// перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
  // сгенерировать случайную зп
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary,
  );
  console.log(`ЗП работника номер ${i} - ${salary}`);

  // прибавить к тоталу
  totalSalary += salary;
}
// вывисти лог
console.log('totalSalary: ', totalSalary);
// totalSalary = employees * (Math.random() * (maxSalary - minSalary) + minSalary);
// console.log(totalSalary);
