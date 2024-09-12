import { apiPostSignUp } from "./api.js";
import { showMessage } from "./all.js";

const signUp = async () => {
  const email = document.getElementById("floatingInput").value;
  const password = document.getElementById("floatingPassword").value;
  const nickname = document.getElementById("floatingNickname").value;

  if (!email || !password || !nickname) {
    return showMessage("warning", "請填寫完整資料");
  }

  const userData = {
    email: email,
    password: password,
    nickname: nickname
  };

  try {
    await apiPostSignUp(userData);
    showMessage("success", "註冊成功～");
  } catch (error) {
    showMessage("warning", error.response.data.message);
  }
};

const signUpButton = document.getElementById("signUpButton");
signUpButton.addEventListener("click", signUp);
