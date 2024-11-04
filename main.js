const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!") //Checks if the input field is empty. If it is, it alerts the user.
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; //A span element containing × is added to each li. This span acts as a delete button.
        li.appendChild(span);
    }
    inputBox.value = '';
    savedata(); //Save to Local Storage
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove() //Delete Task
        savedata(); //Save to Local Storage
    }
}, false)

function savedata() //Save Data Function:
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() 
//When the page loads, showtask() retrieves the saved list from localStorage and sets listContainer's HTML to that saved data, restoring the list.
{
    listContainer.innerHTML = localStorage.getItem("data")
}

showtask();
//Calls showtask() to ensure that any previously saved tasks are displayed when the page loads.