// jshint esversion:10
// --------------- elements ----------------
let button = document.getElementById("button");

// --------------- fetch ----------------
let endpoint = `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users`;

// --------------- Functions ----------------
async function login() {
  try {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let response = await fetch(endpoint);
    let results = await response.json();

    // check email dari user data dan value email
    let user = results.filter((result) => result.email === email);
    if (user.length > 0) {
      //email terdaftar
      // check password dari user data dan value password
      if (user[0].password === password) {
        // simpan data ke localStorage
        localStorage.setItem("user", JSON.stringify(user[0]));
        // redirect ke home
        window.location.href = "/index.html";
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email atau password yang anda masukkan salah!",
          showConfirmButton: true,
        });
      }
    } else if (email == "" && password == "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Silahkan isi email dan password anda!",
        showConfirmButton: true,
      });
    } else {
      // ketika email tidak ketemu by filter method
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Mohon maaf email anda tidak terdaftar",
        showConfirmButton: true,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
// --------------- event listener ----------------
button.addEventListener("click", function () {
  login();
});
