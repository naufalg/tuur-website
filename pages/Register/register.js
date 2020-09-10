// jshint esversion:6
// --------------- element ----------------
let signupBtn = document.getElementById("signup");

// --------------- fetch mock api ----------------
let endpoint = `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users`;

// --------------- Functions ----------------
async function register() {
  try {
    // ! Memanggil Dom Variabel
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

      // ! Ketika User sudah terdaftar
      if (registeredUser.length > 0) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Email anda sudah terdaftar coba menggunakan email yang lain",
          showConfirmButton: true,
        });

        // ! User baru mendaftar
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

        // ! user confirm password
      }
      // else (password.value != confirm_password.value) {
      //   confirm_password.setCustomValidity("Passwords Don't Match");
      // }

      // ! Jika user tidak melengkapi semua
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

// // ! Confirm password
// // Dom
// let password = document.getElementById("password");
// let confirm_password = document.getElementById("confirm_password");

// // Function
// function validatePassword() {
//   //   Jika password tidak sama
//   if (password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//     //     Jika password sama
//   } else {
//     confirm_password.setCustomValidity("");
//   }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;
// --------------- event listener ----------------
signupBtn.addEventListener("click", function () {
  register();
});
