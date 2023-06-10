import {readFile} from "node:fs/promises";

async function main(){
    let filepath = 'D:/PG-DAC-MAR23/WPT/WPT SANTOSH MONDAL/day10 practice/package.json';
    let filedata = await readFile(filepath , {encoding : "utf-8"});
    console.log(filedata);

}

main();