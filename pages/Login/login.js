let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", login);

function login() {
  let usernameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;
  console.log("tes", usernameInput, passwordInput);

  // buat fetch dulu
  fetch("https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users")
    .then((response) => response.json())
    .then((result) => {
      let user = result.filter((item) => item.username === usernameInput);
      console.log("hasil user setelah filter", user);
      if (user.length > 0) {
        alert("username anda ditemukan");
        if (user[0].password === passwordInput) {
          // simpan data user yang login ke localstorage
          localStorage.setItem("user", JSON.stringify(user[0]));
          alert("username dan password sama");
          window.location.replace("/index.html");
        } else {
          alert("password anda salah");
        }
      } else {
        alert("username tidak ditemukan");
      }
    });
}
