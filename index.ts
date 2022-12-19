import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

// const source = from([1, 2, 3, 4, 5]);

// source
//   .pipe(filter((num) => num % 2 === 0))
//   .subscribe((val) => console.log(`Cift Sayilar: ${val}`));

// const example = source.pipe(filter((num) => num % 2 === 0));
// example.subscribe((val) => console.log(`Cift Sayilar: ${val}`));

// const example = source.pipe(filter((num) => num % 2 === 1));
// example.subscribe((val) => console.log(`Tek Sayilar: ${val}`));

const source = from([
  { name: 'Can', age: 29 },
  { name: 'Tugba', age: 27 },
]);

const example = source.pipe(filter((person) => person.age >= 28));

example.subscribe((person) =>
  console.log(`28 yasindan buyuk olanlar: ${person.name}`)
);
