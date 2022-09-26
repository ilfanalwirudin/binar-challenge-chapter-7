const editButton = document.getElementsByClassName("editButton");
const deleteButton = document.getElementsByClassName("deleteButton");
const updateForm = document.getElementById("updateForm");
const deleteForm = document.getElementById("deleteForm");

// Send ID to modal action
for (let i = 0; i < editButton.length; i++) {
  editButton[i].onclick = () => {
    const data = editButton[i].getAttribute("data-bs-id");
    updateForm.setAttribute("action", `/dashboard/edit/${data}`);
  };
}

for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].onclick = () => {
    const data = deleteButton[i].getAttribute("data-bs-id");
    deleteForm.setAttribute("action", `/dashboard/delete/${data}`);
  };
}

const alert = document.querySelector(".alert");

setTimeout(() => {
  alert.style.display = "none";
}, 2000);
