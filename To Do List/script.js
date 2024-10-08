let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";

function renderItems() {
  itemsDiv.innerHTML = null;

  for (const [idx, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "8px";
    checkbox.checked = item.completed;
    checkbox.onchange = () => toggleComplete(idx);

    const text = document.createElement("p");
    text.style.display = "inline";
    text.style.marginRight = "8px";
    text.textContent = item.task;

    if (item.completed) {
      text.style.textDecoration = "line-through";
    }

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItem(idx);

    container.appendChild(checkbox);
    container.appendChild(text);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  }
}

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) items = JSON.parse(oldItems);
  renderItems();
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

function addItems() {
  const value = input.value;
  if (!value) {
    alert("Can't add empty item");
    return;
  }

  items.push({ task: value, completed: false });
  renderItems();
  input.value = "";
  saveItems();
}

function removeItem(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}

function toggleComplete(idx) {
  items[idx].completed = !items[idx].completed;
  renderItems();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);