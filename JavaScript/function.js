//Arrow function 
arrowFun=(studentsDept)=>{
    return studentsDept[0]
}
console.log(arrowFun(['aiml,cse,it',"aiml","cse","it"]));

//destructuring 
var mark=[90,95,93]
var [m1,m2]=mark
console.log(m1,m2);

//ternary operator
a=11
out=(a%2==0)?"Even":"Odd"
console.log(a,"is",out);

//spread operator
arr1=[10,20,30]
arr2=[ 40, 50,60]
arr3=[...arr1,...arr2]
console.log(arr3);

//rest operator
//function restOp(...arr1){
  //  console.log(arr1);
//}
//let a=1,b=2,c=3;
//restOp(a,b,c);

//scope
var a=10;
const b=3.14
console.log("a is",a);
console.log("b is",b);
{
    let a=5;
    let b=1833.3;
    console.log(a);
    console.log(b);

}
console.log(a);

//hoisting
console.log(a);
var a=10;
console.log(a);


