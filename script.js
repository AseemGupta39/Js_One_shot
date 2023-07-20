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

