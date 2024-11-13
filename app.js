// let name = "priyanshi";
// let age = 19;
// console.log(name);
// console.log(age);
// let val = "hello priyanshi what about you?";

// let fullname = "priyanshi pal";
// console.log(fullname);

// let new_value = name;
// console.log(new_value);
// console.log(val);


// let a = 213;
// let b = 56;
// let c = 124;
// let sum = a + b + c;
// console.log(sum);

// if (a > b && a > c) {
//     console.log("largest number is :", a);

// }
// else if (b > a && b > c) {
//     console.log("largest number is :", b);
// }
// else {
//     console.log("largest number is :", c);
// }

// console.table([name, age, val, fullname, new_value, sum]);


// let score = 33;

// let newscore = Number(score);

// console.log(typeof(newscore));
// console.log(newscore);


// let num = 33;
// let stringnum = String(num);
// console.log(stringnum);
// console.log(typeof (stringnum));

// let a = 5;
// let b = 10;
// console.log("arithemitic operators");

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// console.log(a%b);
// console.log(a>b);
// console.log(a<b);



// console.log("assignment operators");


// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);
// console.log(a%=b);
// console.log(a**=b);


// let str = "hello priyanshi.";
// console.log(str.length);
// console.log(str);


// console.log(str[8]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(9));
// console.log(str.indexOf("y"));


// let newstr = "hello priyanshi.";
// console.log(newstr);
// console.log(newstr.trim());




// let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof (date));

// // arrays

// const arr = [0,1,2,3,4,5,6,7,8];
// console.log(arr[3]);

// arr.pop();
// console.log(arr);

// console.log(typeof (arr.join()));

// const new_arr = arr.slice(1,3);
// console.log(new_arr);


// let arr1 = [1, 2, 3, 4, 5];
// arr1.splice(2, 1, 6, 7);  // index 2 par 1 element ko delete kar ke 6 aur 7 insert karega
// console.log(arr1); // Output: [1, 2, 6, 7, 4, 5]

// let myarr = [1,2,3,4,5,6,7,8];

//  let myarr1 = myarr.splice(1,6);
// console.log(myarr1);


// const heros = ["thor","ironman","spiderman"];
// const dc_heros = ["superman","flash","batman"]
// console.log(heros);
// console.log(dc_heros);
// const allheros = heros.concat(dc_heros);
// console.log(allheros);
// console.log(Array.from("priyanshi"));


// object in javascript


const myobj = {
    name: "priyanshi",
    age: 19,
    email: "palpriyanshi712@gmail.com",
    course: "B.TECH",
    fee: 30000
}

console.log(myobj.name);
console.log(myobj.age);
console.log(myobj.email);


myobj.name = "priyanshi pal"

console.log(myobj.name);


Object.freeze(myobj);

myobj.age = 20;
console.log(myobj.age);
console.log(myobj);

console.log(myobj.fee);
console.log(myobj.course);




console.log(myobj);



const newobj = {
    name: {
        fullname: {
            userfullname: {
                firstname: "hello",
                lastname: "dassy"
            }
        }
    }
};

newobj.name = "priyanshi";
newobj.age = 19;
newobj.email = "priyanshi@gamil.com";
newobj.course = "b.tech";
newobj.id = 1001;
newobj.adderss = "agwanpur meerut";
console.log(newobj);



console.log(newobj);



/* advance objects in javascript*/

const course = {
    coursename: "js by chai aur code.",
    price: 999,
    courseInstructor: "hitesh"
}
const { courseInstructor: inst } = course;
console.log(inst);


/* function in detail*/

function myfun() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("I");
}

// myfun();
console.log("repeated");

// myfun();
function add(num1, num2) {
    let result = num1 + num2;
    return result;

}
const result = add(2, 45);
console.log(result);


function loginuser(username, id) {
    return (`username is ${username} and id is ${id}.`);

}
console.log(loginuser("priyanshi", "cutepihu7827"));

function calculatecart(...num1) {
    return num1;
}

console.log(calculatecart(200, 500, 499, 2000));

function one() {
    const username = "priyanshi"
}

/* ++++++++++++++++++++++arrow function +++++++++++++++++*/

const user = {
    username: "hello",
    price: 999,

}

console.log(user);
((name) => {
    console.log(name);


})("priyanshi");


let boll = "red";
switch (boll) {
    case "blue":
        console.log("boll is blue.");
        break;
    case "red":
        console.log("boll is red.");
        break;

    case "green":
        console.log("boll is green.");
        break;


    default:
        console.log("don't matched");

        break;
}

// loops

let i = 5;
for (let i = 0; i < 5; i++) {
    console.log(i);    
}



for (let i = 1; i <=10; i++) {
  console.log(`outer loop is : ${i}`);
  for (let j = 1; j <=10; j++) {
    console.log(`${i} * ${j} = ${i*j}`)
    // console.log(`inner loop is : ${j} and inner loop ${i}`);   
  }
  
    
}
let newarr = ["dates","graps","fig","pineapple","mango","strowbarry","lichi","banana","orange","apple"];
for (let index = 0; index < newarr.length; index++) {
    const element = newarr[index];
    console.log(element);     
    
}
console.log(` length of new array is : ${newarr.length}`);

/* learn break and continue sttement*/

for (let i = 1; i <= 20; i++) {
    if (i ==5){
        console.log(`Detected 5`);
        continue;
    }

 console.log(` Value of i is : ${i}`)
    
}

// learn while loop



let j = 1;
while(j<=10){
    console.log(`Value of j is : ${j}`);
    j++;
}


let myarr = ["batman", "hulk", "superman","flash","spiderman"];
let val = 0;
while(val<myarr.length){
    console.log(`Value of array index by index : ${myarr[val]}`);
    val++;
}


// learn do while loop


let num = 1;

do {
    console.log(`number is : ${num}`);
    num++;
} while (num<=10);

