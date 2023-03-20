const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla']];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
//carMakers.push(1);

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible Types
const importantDates: (Date | string)[] = [new Date()];

importantDates.push('2030-10-10');
importantDates.push(new Date());
