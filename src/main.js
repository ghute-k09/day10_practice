import { readFileSync } from 'fs';

let filePath = 'D:/PG-DAC-MAR23/WPT/WPT SANTOSH MONDAL/day10 practice/package.json';
let fileData = readFileSync(filePath, {encoding : "utf-8"});
console.log(fileData);
