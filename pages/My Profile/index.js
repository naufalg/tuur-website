// let userdummy = {
//   id: "1",
//   createdAt: "2020-09-07T02:38:01.294Z",
//   username: "username 1",
//   password: "password 1",
// };

// localStorage.setItem("user", JSON.stringify(userdummy)
// );

// localStorage.removeItem("user")


// let myprofile = document.querySelector("#my-profile");

const showMyProfile = async () => {
  try {
    // proses ambil data sesuai user
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.id);
    
    let response = await fetch(
      `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}`
    );
    let data = await response.json();
    console.log("data",data);

    // card
    let cardUser = document.querySelector(".user-data")
    // card title
    let cardTitle = document.createElement("h5")
    cardTitle.className="card-title"
    cardTitle.innerHTML=`Username: <br>&nbsp;&nbsp; ${data.name}`
    // email text
    let textEmail = document.createElement("p")
    textEmail.className="card-text"
    textEmail.innerHTML=`E-mail:<br>&nbsp;&nbsp; ${data.email}`
    // edit profile button
    let btnEditProfile = document.createElement("a")
    btnEditProfile.className = "btn btn-outline-info"
    btnEditProfile.innerHTML = "Edit profile"
    btnEditProfile.setAttribute("href", "../edit profile/edit-profile.html")
    cardUser.appendChild(cardTitle)
    cardUser.appendChild(textEmail)
    cardUser.appendChild(btnEditProfile)
    


    // let inputnama = document.getElementsByClassName("card-title");
    // console.log(inputnama);
    // inputnama.innerHTML = data.name

    
    
    

    // // data.forEach((element) => {
    // //   // show my profile
    // //   let profileList = document.createElement("li");
    // //   let profileText = document.createTextNode(`${element.username}`);
    // //   profileList.appendChild(profileText);

    // //   // tambah line enter
    // //   linebreak = document.createElement("br");
    // //   profileList.appendChild(linebreak);

    // //   //show completed
    // //   let userpass = document.createTextNode(`${element.password}`);
    // //   profileList.appendChild(userpass);

    // //   // appendchild ke div todo
    // //   myprofile.appendChild(profileList);
    // });
  } catch {
    console.log("error");
  }
};
showMyProfile();

function funcLogout() {
  console.log("tes logout");
  localStorage.clear();
  window.location.replace("../../index.html");
}
