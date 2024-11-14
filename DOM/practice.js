function addname(addnew_name){
 const li = document.createElement("li");
 li.innerText = `${addnew_name}`;
 document.querySelector(".name").appendChild(li)
    
}
addname("Hitesh");
addname("Shradha");
addname("Aman");