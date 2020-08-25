function nbYear(p0, percent, aug, p) {
  // your code
  //p0 - жителей на сегодня в городе
  //percent - процент прироста жителей в год
  //aug - приезжающие новые жильци в год
  //p - количество, которое станет через n лет. Задача узнать этот n

  percent *= 0.01;

  let i = 0;
  let newPopulation = p0;

  do {
    let yearlyIncrease = newPopulation + newPopulation * percent + aug;
    newPopulation = yearlyIncrease;
    console.log('nbYear -> newPopulation', newPopulation);
    i++;
  } while (newPopulation <= p);

  return i;
}

// nbYear(1500, 5, 100, 5000);
// console.log('nbYear(1500, 5, 100, 5000)', nbYear(1500, 5, 100, 5000));
// nbYear(1500000, 2.5, 10000, 2000000);
// console.log(
//   'nbYear(1500000, 2.5, 10000, 2000000);',
//   nbYear(1500000, 2.5, 10000, 2000000),
// );

nbYear(1500000, 0.25, 1000, 2000000);
console.log(
  'nbYear(1500000, 0.25, 1000, 2000000);',
  nbYear(1500000, 0.25, 1000, 2000000),
);
