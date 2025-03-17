//  Part 1 Fizz Buzz 
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
//Part 2 next Prime number 
console.log("Part 2")
let num = 9;
let prime;
let originalNum = num;
for(num=num+1;;num++){   // starts from next given number
    let multiplier = 0;
    for(let i=2;i<num;i++){
        if(num%i==0){   //checks if any number divisible to the number
            multiplier++;   // it has a number divisible means not prime
            break;      // comes out of the inner loop 
        }
    }
    if(multiplier==0 ){  //  prime check
        prime = num;
        break;
    }
}
console.log(`Next prime number to ${originalNum} is ${prime}`)

// Part 3 csv data display 

console.log("===============Part3=====================");
 let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//let data ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let lines = '';
let words = '';

for (let x of data){ 
     if(x == '\n'){
        lines +="\n";
        words += "|";
    }else{
        words += x;
    }    
    lines += x;
}
console.log("Display data in lines");
console.log(lines);

// Data into cells
console.log("\n Display cell data\n")

let cell1 = '',cell2 ='', cell3 ='',cell4 ='';
let l= words.split("|");

for(let i = 0 ;i <l.length;i++){
    let w = l[i].split(",");
    cell1 = w[0];
    cell2 = w[1];
    cell3 = w[2];
    cell4 = w[3];
    console.log(`${cell1} ${cell2} ${cell3} ${cell4}`);
}

//  Method 2
console.log("Another method");
lines = data.split("\n");
for(let c of lines){
    let cells = c.split(",");
    console.log(`${cells[0]} ${cells[1]} ${cells[2]} ${cells[3]}`)
}


// for(let i = 0 ;i <l.length;i++){
        // if(i%4 == 0){
    //     cell1 = l[i] + " ";
    //     // console.log(l[i] +" inside the condi" + i);
    //  }else if(i%4 == 1){
    //     cell2 = l[i]+" ";
    // }else if(i%4 ==2){
    //     cell3 = l[i] + " ";
    // }else
    //     cell4 = l[i]+" ";
// }
//console.log(` Cell1 : ${cell1}  Cell2: ${cell2}  Cell3: ${cell3}  Cell4: ${cell4}`)