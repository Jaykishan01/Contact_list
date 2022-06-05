add=(a,b)=>{
   console.log(a+b);
}
add(2,9)
console.log(process.argv);// 
var args =process.argv.slice(2);
console.log("Adding the numbers:",add(parseInt(args[0]),parseInt(args[1])))