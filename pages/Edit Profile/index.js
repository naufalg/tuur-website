
// let user = JSON.parse(localStorage.getItem("user"));
// console.log(user.id);

let usernameedit = document.getElementsByClassName("form-control")[0].value;
  console.log(usernameedit);

// async function funceditusername() {
  
//   let url = `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}`;
//   let response = await fetch(url);
//   let data = await response.json();

//   let usernameedit = document.getElementsByClassName("form-control")[0].value;
//   console.log(usernameedit);

//   let dataKirim = {
//     ...data,
//     username: usernameedit,
//   };

//   console.log(dataKirim);

//   let options = {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(dataKirim),
//   };

//   fetch(url, options)
//     .then((response) => response.json())
//     .then(() => {
//       alert("username anda sudah terganti");
//       location.reload();
//     });
// }

// function logout() {
//     console.log("tes logout");
//     localStorage.clear();
//     window.location.replace("../../index.html");
//   }