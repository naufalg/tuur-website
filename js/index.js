// jshint esversion:10

// import { CountUp } from "./js/countUp.min.js";

// window.onload = function () {
//   var countUp = new CountUp("counter-1", 20000);
//   countUp.start();
// };
let logout = () => {
  localStorage.clear();
  window.location.replace("./index.html");
};

let btnDisplay = () => {
  let btnDisplay = document.querySelector("#btn-navbar");
  let getUserData = localStorage.getItem("user");
  let parsedUserData = JSON.parse(getUserData);
  console.log("JSON", getUserData);
  console.log("parsed", parsedUserData);
  if (getUserData !== null) {
    let userProfile = document.getElementById("user-profile");
    userProfile.setAttribute("href", "./pages/My Profile/my-profile.html");
    userProfile.innerHTML = `${parsedUserData.name}`;
    let logoutLink = document.createElement("button");
    logoutLink.className = "btn btn-outline-warning";
    logoutLink.addEventListener("click", logout);
    logoutLink.innerHTML = "Logout";
    btnDisplay.appendChild(logoutLink);
  } else {
    let btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.setAttribute("role", "group");
    let loginLink = document.createElement("a");
    loginLink.className = "btn btn-outline-info";
    loginLink.setAttribute("href", "./pages/Login/login.html");
    loginLink.innerHTML = "Login";
    let signupLink = document.createElement("a");
    signupLink.className = "btn btn-info";
    signupLink.setAttribute("href", "./pages/Register/register.html");
    signupLink.innerHTML = "Signup";
    btnDisplay.appendChild(btnGroup);
    btnGroup.appendChild(loginLink);
    btnGroup.appendChild(signupLink);
  }
};

btnDisplay();

// let logout = () => {

// }

// badge order
let badgeOrder = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
    } else {
      let response = await fetch(
        `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}/order/`
      );
      let data = await response.json();
      console.log(data);
      if (data < 1 || user === null) {
      } else {
        let badgeSpan = document.querySelector(".badge");
        badgeSpan.innerHTML = `${data.length}`;
      }
    }
  } catch {}
};

badgeOrder();
// badge order
