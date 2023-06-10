import { writeFileSync} from 'fs';

let filePath = "D:/PG-DAC-MAR23/WPT/WPT SANTOSH MONDAL/day10 practice/output.txt";
let data = `Lorem Ipsum Or Dummy Content Generator ... Then,
            you can choose the number of words and paragraphs for your
            dummy content and execute the plan accordingly.`;
            
writeFileSync(filePath, data);
console.log("write success!");