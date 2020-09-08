// jshint esversion:6
// --------------- element ----------------
let signupBtn = document.getElementById("signup");

// --------------- fetch mock api ----------------
let endpoint = `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users`;

// --------------- Functions ----------------
async function register() {
  try {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userData = {
      name,
      email,
      password,
    };
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    if (name != "" && email != "" && password != "") {
      let response = await fetch(endpoint);
      let users = await response.json();
      console.log(users);
      let registeredUser = users.filter((user) => user.email === email);

      if (registeredUser.length > 0) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Email anda sudah terdaftar coba menggunakan email yang lain",
          showConfirmButton: true,
        });
      } else {
        let response = await fetch(endpoint, options);
        console.log(response.json());
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Terimakasih sudah mendaftar silahkan login",
          showConfirmButton: true,
        });
        let ok = document.querySelector(".swal2-confirm");
        ok.addEventListener("click", function () {
          window.location.href = "../Login/login.html";
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Anda perlu melengkapi semua informasi di formulir pendaftaran!",
        showConfirmButton: true,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
// --------------- event listener ----------------
signupBtn.addEventListener("click", function () {
  register();
});
