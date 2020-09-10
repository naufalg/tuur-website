// jshint esversion:10
// navbar dynamic login logout link
let logout = () => {
  localStorage.clear();
  window.location.replace("../../index.html");
};

let btnDisplay = () => {
  let btnDisplay = document.querySelector("#btn-navbar");
  let getUserData = localStorage.getItem("user");
  let parsedUserData = JSON.parse(getUserData);
  // console.log("JSON", getUserData);
  // console.log("parsed", parsedUserData);
  if (getUserData !== null) {
    let userProfile = document.getElementById("user-profile");
    userProfile.setAttribute("href", "../My Profile/my-profile.html");
    userProfile.innerHTML = `${parsedUserData.name}`;
    let logoutLink = document.createElement("button");
    logoutLink.className = "btn btn-outline-warning";
    logoutLink.addEventListener("click", logout);
    logoutLink.innerHTML = "Logout";
    btnDisplay.appendChild(logoutLink);
  } else {
    let btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.setAttribute("role", "group");
    let loginLink = document.createElement("a");
    loginLink.className = "btn btn-outline-info";
    loginLink.setAttribute("href", "../Login/login.html");
    loginLink.innerHTML = "Login";
    let signupLink = document.createElement("a");
    signupLink.className = "btn btn-info";
    signupLink.setAttribute("href", "../Register/register.html");
    signupLink.innerHTML = "Signup";
    btnDisplay.appendChild(btnGroup);
    btnGroup.appendChild(loginLink);
    btnGroup.appendChild(signupLink);
  }
};

btnDisplay();
// navbar dynamic login logout link

// display product data
let displayData = async () => {
  try {
    let url1 = "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/hotel";
    let img1Src = "../../assets/images/hotel-bedroom.jpg";
    let response1 = await fetch(url1);
    let data1 = await response1.json();
    // console.log(data1);
    data1.forEach((element) => {
      // console.log(element);
      // console.log(element.hotel);
      // console.log(element.price);
      let displayData1 = document.querySelector(".display-data1");
      // div col
      let div1 = document.createElement("div");
      div1.className = "col-md-4 shadow ";
      // div card
      let divCard1 = document.createElement("div");
      divCard1.className = "card slideanim";
      // img
      let img1 = document.createElement("img");
      img1.className = "card-img-top";
      img1.setAttribute("src", `${img1Src}`);
      // div card body
      let card1Body = document.createElement("div");
      card1Body.className = "card-body";
      // title h5
      let titleCard1 = document.createElement("h5");
      titleCard1.className = "card-title";
      titleCard1.innerHTML = `${element.hotel}`;
      // text p
      let textCard1 = document.createElement("p");
      textCard1.className = "card-text";
      textCard1.innerHTML = `$ ${element.price}/night`;
      // button book
      let button1 = document.createElement("button");
      button1.className = "btn btn-success shadow-sm";
      button1.innerHTML = "Book";
      button1.addEventListener("click", function () {
        funcBook(element.hotel, element.price);
      });
      displayData1.appendChild(div1);
      div1.appendChild(img1);
      div1.appendChild(card1Body);
      card1Body.appendChild(titleCard1);
      card1Body.appendChild(textCard1);
      card1Body.appendChild(button1);
    });
  } catch {
    console.log("Error");
  }
};

displayData();

// search
let searchHotel = async () => {
  try {
    let searchInput = document.getElementById("search-input");
    let searchValue = searchInput.value;
    // console.log("searchInput", searchInput);
    console.log("searchValue", searchValue);
    let url1 = "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/hotel";
    let response1 = await fetch(url1);
    let data1 = await response1.json();
    console.log("data1", data1);
    // filter search
    let filterData = data1.filter((element) => element.hotel == searchValue);
    console.log("filterData", filterData);
    // empty data
    let displayData1 = document.querySelector(".display-data1");
    displayData1.innerHTML = "";

    // show filter data
    if (filterData < 1) {
      let displayData1 = document.querySelector(".display-data1");
      displayData1.innerHTML = `
      <div class="container-fluid">
      <br>
      <div class="row">
      <div class="col-12 text-center justify-content-center">
      <p class="heading-3 text-center">Whoopsie! nothing found ¯\\_(ツ)_/¯</p>
      </div>
      </div>
      <br>
      </div>
      <div class="row col-12 justify-content-center text-center">
      <button class="btn btn-info text-center disp-all">Show all</button>
      </div>
      `;
      let dispAllBtn = document.querySelector(".disp-all");
      dispAllBtn.addEventListener("click", function () {
        location.reload();
      });
    } else {
      // console.log("filterdata",filterData);
      filterData.forEach((element) => {
        // console.log(element);
        // console.log(element.hotel);
        // console.log(element.price);
        let displayData1 = document.querySelector(".display-data1");
        displayData1.innerHTML = `
        <div class="row">
        <div class="col-md-4 shadow">
        <img class="card-img-top" src="../../assets/images/hotel-bedroom.jpg">
        <div class="card-body">
        <h5 class="card-title">${element.hotel}</h5>
        <p class="card-text">$ ${element.price}/night</p>
        <button class="btn btn-success shadow-sm search-button">Book</button>
        <br>
        </div>
        </div>
        </div>
        <div class="row col-12 justify-content-center text-center">
        <br></br>
        <button class="btn btn-info text-center disp-all mt-4">Show all</button>
        </div>
        `;
        let button1 = document.querySelector(".search-button");
        button1.addEventListener("click", function () {
          funcBook(element.hotel, element.price);
        });
        let dispAllBtn = document.querySelector(".disp-all");
        dispAllBtn.addEventListener("click", function () {
          location.reload();
        });
      });




    }
    // let filterSearch
  } catch {}
};

// book
let funcBook = async (hotelName, price) => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      swal({
        title: "Please login first",
        icon: "warning",
        button: "OK",
      });
    } else {
      // console.log("user", user.id);
      let userId = user.id;
      // console.log("hotel", hotelName);
      // console.log("price", price);

      let postOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotel: hotelName,
          price: price,
        }),
      };

      let response = await fetch(
        `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${userId}/order/`,
        postOption
      );
      let result = await response.json();
      // console.log(result);
      swal({
        title: "Success!",
        text: `${hotelName} added!`,
        icon: "success",
        button: "Proceed",
      });
    }
  } catch {
    console.log("error");
  }
};

// let count;
// let cartArray;
// funcbook function
// function funcBook(hotelName, price) {
// count += 1;
// let oldItems = localStorage.getItem("order");
// console.log("oldItems", oldItems);
// let parsedOldItems = JSON.parse(oldItems);
// console.log("parsedOI", parsedOldItems);
// let cartArray = [...parsedOldItems];
// console.log("cartArrayluar", cartArray);
// if (parsedOldItems == null) {
//   let cartArray = [];
//   let newItem = {
//     hotelName: hotelName,
//     price: price,
//     orderId: count,
//   };
//   cartArray.push(newItem);
//   console.log("cartArrayIf", cartArray);
//   localStorage.setItem("order", JSON.stringify(cartArray));
// } else {
//   let newItem = {
//     hotelName: hotelName,
//     price: price,
//     orderId: count,
//   };
//   console.log("arrayElseSblumPush",cartArray);
//   cartArray.push(newItem);
//   console.log("cartArrElse", cartArray);
//   localStorage.setItem("order", JSON.stringify(cartArray));
// }

// oldItems = oldItems ? JSON.parse(oldItems) : {};

// oldItems;

// for (i = 1; i < oldItems.length; i++) {
//   oldItems[i]["orderId "] = i;
// }

// console.log(oldItems);
// let newItem = {
//   "hotelName": hotelName,
//   "price": price
// };

// oldItems.push(newItem);

// localStorage.setItem("order", JSON.stringify(oldItems));

// let orderData = JSON.stringify({
//   orderId: i
//   hotelName: hotelName,
//   price: price,
// });

// localStorage.setItem(
//   "order",
//   JSON.stringify({
//     hotelName: hotelName,
//     price: price,
//     orderId: i,
//   })
// );
// }

// let getLocation = async () => {
//   let url = "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Destination";
//   try {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
//     data.forEach((element) => {
//       console.log(element.location);
//     });
//   } catch {
//     console.log("error");
//   }
// };

// getLocation();
