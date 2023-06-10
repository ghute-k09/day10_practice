// function sum(n1 , n2){
//     return n1 + n2;
// }

// let output = sum(10 , 20);
// console.log(output);

async function sum(n1 , n2){
    return n1 + n2;
}
 async function main(){
  let output =  await sum(10 ,15);
  console.log(output);
}
main();
