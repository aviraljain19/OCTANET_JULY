const task = document.getElementById("task");
const taskBtn = document.getElementById("taskBtn");
const showTask = document.querySelector(".showTask");
const show = document.querySelector(".show");
const error = document.querySelector(".error");
const time = document.getElementById("time")

let count = 0;
let deleteButton = function (taskItem) {
  var deleteB = document.createElement("button");
  deleteB.innerHTML = "&times";
  deleteB.className = "deleteB";

  deleteB.addEventListener("click", () => {
    taskItem.parentNode.removeChild(taskItem);
    count--;
    if (count == 0) {
      showTask.style.border = "0px solid black";
      showTask.style.boxShadow = "0px 0px 0px 0px black";
    }
  });
  return deleteB; 
};
taskBtn.addEventListener("click", () => {
  if (task.value == "") {
    error.innerHTML = "Please fill the task";
  } else {
    console.log(time.value);
    count++;
    showTask.style.border = "1px solid black";
    showTask.style.boxShadow = "0px 5px 5px 0px black";
    let taskItem = document.createElement("li");
    taskItem.innerHTML = task.value;
    taskItem.className="taskItem"
    let taskName = document.createElement("div");
    taskName.className = "show1";
    let taskTime = document.createElement("div")
    taskTime.innerHTML=time.value
    taskTime.className="taskTime"
    console.log(taskItem);
    showTask.appendChild(taskName);
    taskName.appendChild(taskItem);
    task.value = "";
    taskName.appendChild(taskTime);
    time.value="";
    taskName.appendChild(deleteButton(taskName));
    error.innerHTML = "";
  }
});
