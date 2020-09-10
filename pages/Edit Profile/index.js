// jshint esversion:10
// let buttoninput = document.querySelector("#submitbtn")
// buttoninput.onclick = function() {
//   funceditusername()
// }
// console.log(buttoninput);

async function funceditusername() {
  console.log("test button");
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user.id);
  let url = `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}`;
  let response = await fetch(url);
  let data = await response.json();

  let usernamebaru = document.querySelector("#usernameinput").value;
  console.log("usernamebaru", usernamebaru);

  let emailinputbaru = document.querySelector("#emailinput").value;
  console.log("emailinputbaru", emailinputbaru);

  let dataKirim = {
    ...data,
    name: usernamebaru,
    email: emailinputbaru,
  };

  console.log(dataKirim);

  localStorage.setItem("user", JSON.stringify(dataKirim));
  let options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(dataKirim),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then(() => {
      alert("username dan email anda sudah terganti");
      window.location.replace("../My Profile/my-profile.html");
    });
}

// first value
let inputValue = () => {
  let userData = JSON.parse(localStorage.getItem("user"));
  let oldEmail = document.querySelector("#emailinput");
  oldEmail.value = userData.email;
  let oldUsername = document.querySelector("#usernameinput");
  oldUsername.value = userData.name;
};

inputValue();
// function logout() {
//     console.log("tes logout");
//     localStorage.clear();
//     window.location.replace("../../index.html");
//   }

// function funceditusername() {
//   console.log("tes")
// }
