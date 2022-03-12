// const bill=275;
// const tip2=0.20
// const tip=41.25;
// // const total=bill>50 && bill<300 ? "Total is "+ bill+tip:"out of total context";
// // console.log(total);

// console.log(`Total is ${bill>=50 && bill<=300 ? Total is bill+tip : this is else part} `)

// const age=25;
// age>=18 ? console.log("this is if statemnet") : console.log("this is else");
// const message=age>=18 ? "if statement" : "else statement"
// console.log(message);

// console.log(`Bakwas hei yar ${age>=18 ? "if statement" : "else statement"}`);

// const bill=275;
// const tip=41.25;
// const tip2=0.2;
//  bill>=50 && bill<=300 ? (bill+tip) :"Total for else part ";
// console.log(`Total is ${bill>=50 && bill<=300 ? (bill+tip) :(bill+tip2)}`);
const bill=275;
const tip=bill>=50 && bill<=300 ? (bill*0.15) :(bill*0.2);
console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value 
${bill+tip}`)