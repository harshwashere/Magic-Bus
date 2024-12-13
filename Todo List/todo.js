const input = document.getElementById("inp");
const leftbox = document.querySelector(".pending-tasks");


function add() {
  if (input.value === "") {
    alert("Please enter something!!!!");
  } else {
    let list = document.createElement("div")
    list.innerHTML = `${input.value} <i class="fa-solid fa-trash text-red-600 cursor-pointer"></i>`;
    list.classList.add("list")
    list.setAttribute("draggable","true")
    leftbox.appendChild(list);
    console.log(list)
    input.value = "";

    list.querySelector("i").addEventListener("click", function () {
      let ans = confirm("Do you want to delete this task?");
      if (ans) {
        list.remove();
      }
    });

    let complete = document.querySelector(".complete")
    let rightbox = document.querySelector(".completed-tasks");


let selected = null;

// for (let list of lists) {
//   list.addEventListener("dragstart", function (e) {
//     selected = e.target;
//   });
// }
console.log(list)

list.addEventListener("dragstart", function(e) {
  
  
    selected = list;
    
});

  

complete.addEventListener("dragover", function (e) {
  e.preventDefault();
});

complete.addEventListener("drop", function (e) {
  if (selected) {
    rightbox.appendChild(selected);

    selected = null;
  }
});
console.log(rightbox)

leftbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

leftbox.addEventListener("drop", function (e) {
  // If an item is being dragged (i.e., selected is not null)
  if (selected) {
    // Append the dragged item (selected) back to the left box
    leftbox.appendChild(selected);
    // Clear the selected variable since the drop is complete
    selected = null;
  }
});

  }
}

