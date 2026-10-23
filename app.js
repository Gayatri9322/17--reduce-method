var cl=console.log;

//Reduce
let age=[10,20,5,15,30];

//adition
let result=age.reduce((acc, cv)=>{
  // cl(acc,cv)
  acc=acc+cv;
  return acc
});
cl(result)

//multiplication
let result01=age.reduce((acc, cv)=>{
  acc=acc*cv;
  return acc
});
cl(result01)

//
let result02=age.reduce((acc, cv)=>{
  acc=acc+cv;
  return acc
},0);
cl(result02)

//
let result03=age.reduce((acc, cv)=>{
  acc=acc*cv;
  return acc
},1);
cl(result03)

// we want in array
let result04=age.reduce((acc, cv)=>{
  acc.push(cv*2);
  return acc
},[]);
cl(result04)


//Todays Task
let result05=age.reduce((acc, cv)=>{
  acc.push(`The value is ${cv}`);
  return acc
},[]);
cl(result05)












// let age =[10,20,5,15,30];
// let result=0;
// age.forEach(para=>{
//   result += para;
// });
// cl(result);

//forOff
// let age01 =[10,20,5,15,30];
// let result01=0;
// for(let key of age01){
//   result01+=key;
// }
// cl(result01);

