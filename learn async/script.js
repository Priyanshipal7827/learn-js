// // ++++++++++++++++settimeout+++++++++++


// // setTimeout(function(){
// //     console.log("priyanshi!")
// // }, 2000);


// // const saypriya = function(){
// //     console.log("hello priyanshi!");
// // }

// // setTimeout(saypriya, 5000);

// const h1 = (() =>{
//     document.querySelector("h1").innerHTML = "hello priyanshi! what about you."
// });

//  const newh1 = setTimeout(h1, 5000);

// const changebtn = (() =>{
//     document.querySelector("button").innerHTML = "click me!";
//     console.log("hello world!");    
// });

// const changeme = setTimeout(changebtn,5000);


// // stopped changed!


// document.querySelector("button").addEventListener("click" , function(){
//     clearTimeout(newh1);
//     console.log("STOPPED!")
// });


// document.querySelector("button").addEventListener("click" , function(){
//     clearTimeout(changeme);
//     console.log("STOPPED!")
// });

//++++++++++++++++++++++setinterval+++++++++++++++++++++++


//setInterval(function(){
//     console.log('priyanshi pal!', Date.now());

// },1000)


// const saydate = ((str) =>{
//     console.log(str, Date.now());
// })

// setInterval(saydate, 10000, "hello world!");
//  ****stsrt time*****
let timmer;
const starttime = (()=>{
    timmer = setInterval(changetime, 1000);
    function changetime(){
        console.log("hello priyanshi", Date.now());       

    }
})

const stoptime = (() => {
 clearInterval(timmer);

})

document.querySelector("#start").addEventListener("click", starttime)

document.querySelector("#stop").addEventListener("click", stoptime);

