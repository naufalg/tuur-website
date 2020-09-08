// jshint esversion:10
// buat function async await register
const register = async () => {
  console.log("register");

  let nameInput = document.getElementById("nama").value;
  let userNameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;

  console.log("isi inputan", nameInput, userNameInput, passwordInput);

  let userData = {
    name: nameInput,
    username: userNameInput,
    password: passwordInput,
  };
  // post data user

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  let url1 = "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users";
  let response = await fetch(url1, options);
  let result = await response.json();
  console.log(result);
};
