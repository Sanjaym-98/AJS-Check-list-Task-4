const color = document.getElementById("color");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const container =document.getElementById("container");
const colors=["red","blue","yellow","pink","orange","violet","brown","green","black"];
let i=0
color.addEventListener("click",()=>{
container.style.backgroundColor =colors[i];
i++;
if(i>8){
    i=0
}
})

add.addEventListener("click",()=>{
    const newdiv = document.createElement("div");
    newdiv.id = "child"
    container.appendChild(newdiv)

})

remove.addEventListener("click",()=>{
    let data = container.lastChild;
   console.log(data);
   data.remove()
 

})