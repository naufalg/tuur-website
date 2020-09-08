let myprofile = document.querySelector("#my-profile");

const showMyProfile = async () => {
    try {
      // proses ambil data sesuai user
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user.id);
      let response = await fetch(
        `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}`
      );
      let data = await response.json();
      console.log(data);
    
      data.forEach((element) => {
        // show my profile
        let profileList = document.createElement("li");
        let profileText = document.createTextNode(`${element.username}`);
        profileList.appendChild(profileText);

         // tambah line enter
      linebreak = document.createElement("br");
      profileList.appendChild(linebreak);

      //show completed
      let userpass = document.createTextNode(`${element.password}`);
      profileList.appendChild(userpass);

      // appendchild ke div todo
      myprofile.appendChild(profileList);
      
    });
  } catch {
    console.log("error");
  }
};
showTodos();
