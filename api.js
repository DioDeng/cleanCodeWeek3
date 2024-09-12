const API_BASE_URL = 'https://todolist-api.hexschool.io'

const apiPostSignUp = (userData)=>axios.post(`${API_BASE_URL}/users/sign_up`, userData);
const apiPostSignIn = (userData)=>axios.post(`${API_BASE_URL}/users/sign_in`, userData)
const apiGetTodoList = (token) => axios.get(`${API_BASE_URL}/todos/`, token)
const apiPostTodo = (inputData, token) => axios.post(`${API_BASE_URL}/todos/`, inputData, token)

export{
    apiPostSignUp,
    apiPostSignIn,
    apiGetTodoList,
    apiPostTodo
}