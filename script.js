// document.write('len to the sum')

// function f_n(a)
// {
//     console.log(a);
// }

// let func_name = function(para="randy",time="mar"){
//     // alert(para);
//     console.log(`this is ${para},time is ${time}`);
// }

// func_name(time="apr");

// let ageCalculate = function(birthYear){
//     console.log(2023-birthYear);
// } 

// ageCalculate(15);

//  arrow functions

let invitation = name => `welcome to the event ${name}`
let invitation2 = name => {
    return `redrichards ${name}`
}

let stat = invitation('dj');
let stat2 = invitation2('man');

// alert(stat);
// alert(stat2);

let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}

// alert(upperCase('upper'));
// alert(upperCase('welcome'));
// alert(lowerCase('LOWER'));

let transformer = function(str,func){
    return func(str);
}

// alert(transformer('HELLO',lowerCase));

let compliment = function(msg){
    return function(name){
        console.log(`${msg} is the ${name}`)
    }
}

// alert(compliment('mrt')('gtr'));


function greeting(name)
{
    console.log(`welcome ${name}`);
    // alert('wwe');
}

// setTimeout(greeting,5000,"jhon"); // itne delay ke baad chize aayenge

// setInterval(greeting,1000,'jhon');


let car = {
    color:'red',
    model:"2023",
    company:"volvo"
}

console.log(car);

// accessing values

// console.log(car['color']);
// console.log(car.color);

let proprty_name = 'company';

console.log(car[proprty_name]);
// console.log(car.proprty_name);  this will not work dot will search for objects defined property

car.company = "tata";
console.log(car[proprty_name]);

// deleting properties of objects

let obj1 = {
    prop1:"value1",
    prop2:"value2"
}

console.log(obj1);
delete obj1.prop1
console.log(obj1);

let person = {
    ageCalculate: function(birthyear){
        
    }
}