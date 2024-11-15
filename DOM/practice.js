function addname(addnew_name){
 const li = document.createElement("li");
 li.innerText = `${addnew_name}`;
 document.querySelector(".name").appendChild(li)
    
}
addname("Hitesh");
addname("Shradha");
addname("Aman");
function addlanguage(newlanguage){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newlanguage));
    document.querySelector(".name").appendChild(li);

}
addlanguage("java");
addlanguage("python");
addlanguage("golang");
addlanguage("javascript");
addlanguage("typescript");

// remove


    const lastlang = document.querySelector("li:last-child")
    lastlang.remove();

