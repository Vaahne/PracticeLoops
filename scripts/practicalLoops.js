//  Part 1
for(let i=1;i<=100;i++){
    if(i%15==0){
        console.log("Fizz Buzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else
        console.log(i);
}
//Part 2
console.log("Part 2")
let num = 5;
let prime=0;
let previousNum = num;
for(;;++num){
    let multiplier = 0;
    for(let i=2;i<num;i++){
        if(num%i==0){
            multiplier++;
            break;
        }
    }
    if(multiplier==0 && num!=previousNum){
        prime = num;
        break;
    }
}
console.log(`next prime number is ${prime}`)

console.log("===============Part3=====================");
 let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//let data ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let lines = '';
let words = '';

for (let x of data){
    if(x == ','){
        words += " ";
        lines += " ";
        continue;
    }else if(x == '\n'){
        lines +="\n";
    }else{
        words += x;
    }    
    lines += x;
}
console.log(lines);

let id = '',names ='', Occupation ='',age ='';

let l= lines.split(" ");
console.log(" fadsfsdfa"+l[2]);

// for(let i = 0 ;i <lines.length;i++){
//     if(i%4 == 0){
//         id += lines[i];
//     }else if(i%4 == 1){
//         names += lines[i];
//     }else if(i%4 ==2){
//         Occupation += lines[i];
//     }else
//         age += lines[i];
// }
// console.log(`ids ${id} and name ${names} and occupation ${Occupation} and age ${age}`)