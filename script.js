const ul=document.getElementById("list");//ul
const inputbox=document.getElementById("input");//box
const button=document.getElementById("button");//button
loaditems();

function value(){

   const input=inputbox.value.trim();
if(input){
    add(input);
    inputbox.value='';
    savelist();
}
else{
    alert("Enter your do list!");
}
}

button.addEventListener('click',value);

function add(input){
  
  let list=document.createElement('li');
  list.textContent=input;
  ul.appendChild(list); 

  let deleteitem= document.createElement('button');
  deleteitem.textContent="Delete";
  deleteitem.className='del';
  list.appendChild(deleteitem);

  deleteitem.addEventListener('click',()=>{
ul.removeChild(list);
savelist()});
  
}

function savelist(){
    let task=[];
    ul.querySelectorAll('li').forEach(items=>{
        task.push(items.textContent.replace('Delete',''))
    });

    localStorage.setItem('task', JSON.stringify(task));
}

function loaditems(){
    let loadelement=JSON.parse(localStorage.getItem('task'));
    loadelement.forEach(add);
}