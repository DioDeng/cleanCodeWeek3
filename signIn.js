import { apiPostSignIn } from './api.js'
import { showMessage }from './all.js'

const email = document.getElementById('floatingInput');
const password = document.getElementById('floatingPassword');

const signIn = async ()=> {
    
    if(!email.value || !password.value) {
        return showMessage('warning', '請填寫完整資料');
    }

    const userData = {
        email: email.value,
        password: password.value
    }

    try {
        const response = await apiPostSignIn(userData)
        document.cookie = `hexschoolTodoHakka=${response.data.token}; expires=${response.data.exp}`
        showMessage('success', '登入成功～');

    } catch(error) {
        showMessage('warning', error.response.data.message);
    }
}

const signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", signIn)
