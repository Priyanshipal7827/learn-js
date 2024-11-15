// document.getElementById("miss").addEventListener("click", function(){
//     alert("You Clicked Miss world Image.")
// });

// document.getElementById("river").addEventListener("click", function(){
//     alert("You Clicked River  Image.")
// });

// document.getElementById("animal").addEventListener("click", function(){
//     alert("You Clicked Animal  Image.")
// });

// document.getElementById("all_imeges").addEventListener("click", function(){
//     alert("You Clicked Mountain  Image.")
// });

// document.getElementById("paris").addEventListener("click", function(){
//     alert("You Clicked Paris  Image.")
// }

// document.getElementById('miss').addEventListener('click', function(e){
//     console.log('you clicked miss world image.');
// }, true);

// document.getElementById('all_imeges').addEventListener('click', function(e){
//     console.log('you clicked all images');
// }, true);


// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked!")

// }, false);

// document.querySelector("#all_imeges").addEventListener("click", function(e){
//     console.log(e.target.parentNode);

// }, false);


document.querySelector("#all_imeges").addEventListener("click", function (e) {
    console.log(e.target.parentNode);
    let removeIt = e.target.parentNode;
    removeIt.remove();

});
