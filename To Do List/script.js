const input = document.querySelector(".do");
const btn = document.querySelector(".btn");
const storage = document.querySelector(".container");
const store = document.querySelector(".contain");
const Task = document.querySelector(".task");
btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("try wrting something");
  } else {
    const data = document.createElement("div");
    data.classList.add("card");
    store.appendChild(data);

    const data_input = document.createElement("input");
    data_input.classList.add("task");
    data_input.type = "text";
    data_input.setAttribute("readonly", "readonly");
    data_input.value = input.value;
    data.appendChild(data_input);
    store.appendChild(data);

    const data_edit = document.createElement("button");
    data_edit.classList.add("btn1");
    data_edit.classList.add("edit");
    data_edit.innerText = "Edit";
    data.appendChild(data_edit);
    store.appendChild(data);

    const data_save = document.createElement("button");
    data_save.classList.add("btn1");
    data_save.classList.add("save");
    data_save.innerText = "Save";
    data.appendChild(data_save);
    store.appendChild(data);

    const data_delete = document.createElement("button");
    data_delete.classList.add("btn1");
    data_delete.classList.add("delete");
    data_delete.innerText = "Delete";
    data.appendChild(data_delete);
    store.appendChild(data);

    input.value = "";

    data_edit.addEventListener("click", (e) => {
      if (e.target === data_edit) {
        data_input.removeAttribute("readonly", "readonly");
        data_input.focus();
      }
      if (e.target === data_save) {
        data_input.setAttribute("readonly", "readonly");
      }
    });

    data_delete.addEventListener("click", () => {
      store.removeChild(data);
    });
  }
});
