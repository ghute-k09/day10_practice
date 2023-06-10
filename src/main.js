import { writeFileSync} from 'fs';

let filePath = "D:/PG-DAC-MAR23/WPT/WPT SANTOSH MONDAL/day10 practice/output.txt";
let data = "good night";
writeFileSync(filePath, data);
console.log("write success!");