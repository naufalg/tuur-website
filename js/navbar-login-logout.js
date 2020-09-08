// navbar dynamic login logout link
let logout = () => {
  localStorage.clear();
  window.location.replace("../../index.html");
};

let btnDisplay = () => {
  let btnDisplay = document.querySelector("#btn-navbar");
  let getUserData = localStorage.getItem("user");
  console.log(getUserData);
  if (getUserData !== null) {
    let logoutLink = document.createElement("button");
    logoutLink.className = "btn btn-outline-warning";
    // logoutLink.setAttribute("href", "./pages/Login/login.html");
    logoutLink.addEventListener("click", logout);
    logoutLink.innerHTML = "Logout";
    btnDisplay.appendChild(logoutLink);
  } else {
    let btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.setAttribute("role", "group");
    let loginLink = document.createElement("a");
    loginLink.className = "btn btn-outline-info";
    loginLink.setAttribute("href", "../Login/login.html");
    loginLink.innerHTML = "Login";
    let signupLink = document.createElement("a");
    signupLink.className = "btn btn-info";
    signupLink.setAttribute("href", "../Register/register.html");
    signupLink.innerHTML = "Signup";
    btnDisplay.appendChild(btnGroup);
    btnGroup.appendChild(loginLink);
    btnGroup.appendChild(signupLink);
  }
};

btnDisplay();
