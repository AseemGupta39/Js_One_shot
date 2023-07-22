"use strict"

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

// console.log(car);

// accessing values

// console.log(car['color']);
// console.log(car.color);

let proprty_name = 'company';

// console.log(car[proprty_name]);
// // console.log(car.proprty_name);  this will not work dot will search for objects defined property

car.company = "tata";
// console.log(car[proprty_name]);

// deleting properties of objects

let obj1 = {
    prop1:"value1",
    prop2:"value2"
}

// console.log(obj1);
// delete obj1.prop1
// console.log(obj1);

let person = {
    ageCalculate: function(birthyear=2003){
        let age = 2023 - birthyear;
        return age;
    }
}

// console.log(`current age of person is ${person.ageCalculate(15)}`);

let person1 = {
    name : "dj",
    city: "Jamshedpur",
    proffesion: "rick climbing",
    get_summary :function(){
        return `${this.name} lives in ${this.city} and does ${this.proffesion}`
        
        // return this; // full description
    }
}

// console.log(person1.get_summary());

let dishes = ["ad","fh","kl","by"];

for(let i = 0;i<dishes.length;i++){
    // console.log(dishes[i]);
}

// console.log('***************************');

dishes.forEach(function(item,index,array){
    array[index] = item+" "+index;
    // console.log(array[index]);
})


let blocklist = [{username:"jhon",reason:"abusive content"},{username: "paul",reason:"copyright claim"}];

let n = blocklist.length;

// for(let i=0;i<n;i++){
//     console.log(`user blocked ${blocklist[i].username} due to ${blocklist[i].reason}`);
// }

let min_Plane = {
    airplane:"fl india",
    bookings:[],
    book:function(flightnum,name){
        console.log(`${name} booked flight on ${flightnum}`);
        this.bookings.push({flightnum:`${flightnum}`,name:`${name}`});      
    }
} 

// min_Plane.book(195,"her");
// min_Plane.book(169,"him");

// console.log(min_Plane);


let child_plane = {
    airplane:"Child Plane",
    iatacode :"cp",
    bookings:[]
}

let book = min_Plane.book;

// book.call(child_plane,225,"fefwef");
// console.log(child_plane);

// book.call(min_Plane,69,"r5gre");

//  call method can also be implemented by apply method like this
// book.apply(min_Plane,[89,"terghwer"]);
// console.log(min_Plane);




//  using bind //

// function greet(){
//     console.log(`welcome ${this.first} and ${this.last}`);
// }

// let user ={ 
//     first:"few",
//     last:"dew"
// }

// let g = greet.bind(user);
// g();

//  used bind //


let arr = [1,2,3]
let ref = arr; // same memory location affects original array

let indi_ref = [...arr]; // diff mem loca dose not affect original

// console.log(arr,ref,indi_ref);

ref[0] = 14; 
indi_ref[0] = 41;

// console.log('after diff');
// console.log(arr,ref,indi_ref);

// console.log(car);
let x = "";
for(let key in car){
    // console.log(`${key} = ${car[key]}`);
    x+=car[key];
}
// console.log(x);
delete car.color;
// console.log(car.color);  // deleting object property


// console.log(document);

let query_sel_ele = document.querySelectorAll("p"); //
// console.log(query_sel_ele);

let tag_name_ele = document.getElementsByTagName("p");
// console.log(tag_name_ele);


let class_name_ele = document.getElementsByClassName('hech3');
// console.log(class_name_ele);


let heading = document.querySelector('h1');
// console.log(heading.innerHTML); // does not ignore spaces 
// console.log(heading.innerText); // does ignore spaces 


let content = document.querySelector('.content');
 
// console.log(content.innerHTML); // does not ignore spaces 
// console.log(content.innerText); // does ignore spaces 


// content.innerText += "<h2>hello bachoo</h2>";

// content.innerHTML += "<h2>hello bachoos</h2>"; 



// let link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href',"www.koogle.com")

// console.log(link.getAttribute('href'));

// link.innerText="google ka compititor";


// heading.style.color="hotpink";
// heading.style.backgroundColor="aqua";

// heading.classList.add('newClass');
// heading.classList.add('BIGClass');

// console.log(heading.className);

// heading.classList.remove('BIGClass')
// console.log(heading.className);

// heading.classList.replace('newClass',"Class1");
// console.log(heading.className);

let parent_con = document.querySelector(".content");
console.log(Array.from(parent_con.children));

Array.from(parent_con.children).forEach(function(element){
    // console.log(element);
    element.classList.add('coders');
})

let child_ele = document.querySelector('h2');
// console.log(child_ele.parentElement);

console.log(child_ele.nextElementSibling);
console.log(child_ele.previousElementSibling);