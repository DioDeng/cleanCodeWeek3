import { apiGetTodoList, apiPostTodo } from "./api.js";
import { showMessage } from "./all.js";

let todoList = [];

// 取得cookie token
const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)hexschoolTodoHakka\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

// 取得todoList
const getTodoList = async () => {
  try {
    const response = await apiGetTodoList({
      headers: {
        Authorization: token,
      },
    });
    todoList = response.data.data;
    renderTodoList();
  } catch (error) {
    showMessage("warning", error.response.data.message);
  }
};

// 新增todo
const addTodo = async () => {
  const todoInput = document.getElementById("todoInput").value;

  if (!todoInput) {
    return showMessage("error", "代辦事項不能為空白");
  }

  try {
    const resopnse = await apiPostTodo({content: todoInput}, {
        headers: {
          Authorization: token,
        },
      });
    showMessage("success", `新增成功：${resopnse.data}`);
    getTodoList();
  } catch (error) {
    showMessage("error", error.response.data.message);
  }
};

// 渲染todo view
const renderTodoList = () => {
  const todoListContainer = document.getElementById("todoListView");
  let html = "";
  todoList.forEach((todo) => {
    html += `<li><b>${todo.content}</b></li>`;
  });
  todoListContainer.innerHTML = html;
};

const addTodoButton = document.getElementById("addTodoButton");
addTodoButton.addEventListener("click", addTodo);

getTodoList();
