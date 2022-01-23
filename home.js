// let fruits = ['apple','mango','banana','pineapple'];
// let vegetable = ['tomato','patato','brinjal'];
// let allobject = fruits.concat(vegetable);
// console.log(allobject);
// console.log(allobject.slice(1,5));
// console.log(allobject.reverse());
// let somenumber = [2,3,4,19,77,6,44,34,26,90];
// console.log(somenumber.sort(function(a,b){return a-b})); // ascending order 
// console.log(somenumber.sort(function(a,b){return b-a})); // decending order 
// let emptyarray = new Array();
// for( num =0 ; num<10; num++){
//     emptyarray.push(num);

// }
// console.log(emptyarray);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//objects in java scripts 
//and dictionaries in python 
// let student = {first:'rafeh',
//  last:'qazi',
//  age:25,
//  heght:170,
//  weight :67,
//  studentinfo : function(){
//      return this.first + '\n'+this.last;
//  }

// };
// console.log(student.first);
// student.first = 'nora';
// console.log(student.first);//can change value 
// student.age++;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//conditionals ,controls flows(if else)
var  age = prompt("what is your age ");
if((age>=18) && (age <=35)){
     st = 'target demo';
}
else{
    st = 'not my auidance ';

}
console.log(st);

// switch statements -----------------
// if every day was a wekk day 

switch(6) {
    case 0 :
        text = 'weekend';
        break;
    case 5 :
        text = 'weekend';
        break;
    case 6 :
        text = 'weekend';
        break;
    default:
        text = 'weekend';
           
}
console.log(text);




