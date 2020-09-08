// --------------- ELEMENTS ----------------
let button = document.getElementById("button");

// --------------- FETCH ----------------
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
          title: "Wrong email or password!",
          showConfirmButton: true,
          // timer: 5000,
        });
        // alert("Wrong email or password!");
      }
    } else if (email == "" && password == "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please fill email and password!",
        showConfirmButton: true,
        // timer: 5000,
      });
    } else {
      // ketika email tidak ketemu by filter method
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Your email has not been registered yet",
        showConfirmButton: true,
        // timer: 5000,
      });
      // alert("Your email has not been registered yet");
    }
  } catch (error) {
    console.error(error);
  }
}
// --------------- EVENT LISTENER ----------------
button.addEventListener("click", function () {
  login();
});
