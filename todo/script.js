//add()
let todoList=[];
let todoDates=[];

function addelement(){
  let input=document.querySelector("#text-todo");
  let inputdate=document.querySelector("#todo-date");
 
 
  let todoitem=input.value;
  let tododate=inputdate.value;
  todoList.push(todoitem);
  todoDates.push(tododate);
  input.value=" ";
  inputdate.value=" ";
  displayitems();
}

function displayitems(){
  let displayelement=document.querySelector("#display");
  let newHtml=' ';
  
  for(let i=0;i<todoList.length;i++){
    newHtml +=`
    <span>${todoList[i]}</span><span id="date"> ${todoDates[i]}</span>     <button id="edit" onclick="edititem(${i})">Edit</button>
     <button id="del" onclick="todoList.splice(${i},1);
     displayitems();">Delete</button>
    `;
    displayelement.innerHTML  = newHtml;
  }
 
  
}
function edititem(index){
  let newtodo=prompt("edit your to do",todoList[index]);
  todoList[index]=newtodo;
  displayitems();
}

