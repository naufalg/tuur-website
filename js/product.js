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
  console.log("JSON", getUserData);
  console.log("parsed", parsedUserData);
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

// display product data
let displayData = async () => {
  try {
    let url1 = "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/hotel";
    let img1Src = "../../assets/images/hotel-bedroom.jpg";
    let response1 = await fetch(url1);
    let data1 = await response1.json();
    console.log(data1);
    data1.forEach((element) => {
      console.log(element);
      console.log(element.hotel);
      console.log(element.price);
      let displayData1 = document.querySelector(".display-data1");
      // div col
      let div1 = document.createElement("div");
      div1.className = "col-md-4";
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
      button1.className = "btn btn-success";
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

      //       div1.innerHTML = `
      //       <div class="card slideanim">
      //       <img class="card-img-top" src=${img1} alt="Card image cap">

      // <div class="card-body">
      //   <h5 class="card-title">${element.hotel}</h5>
      //   <p class="card-text">
      //   $ ${element.price}/night
      //   </p>
      // </div>
      // </div>
      // <br>
      // `;

      // displayData1.appendChild(div1);
    });

    //     let url2 = "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Attraction";
    //     let img2 = "../../assets/images/ferris-wheel.jpg";
    //     let response2 = await fetch(url2);
    //     let data2 = await response2.json();
    //     data2.forEach((element) => {
    //       let displayData2 = document.querySelector(".display-data2");
    //       let card2 = document.createElement("div");
    //       card2.className = "col-md-4";
    //       card2.innerHTML = `
    //       <div class="card slideanim">
    //       <img class="card-img-top" src=${img2} alt="Card image cap">

    // <div class="card-body">
    //   <h5 class="card-title">${element.attraction}</h5>
    //   <p class="card-text">
    //   $ ${element.price}
    //   </p>
    //   <button
    //   type="button"
    //   class="btn btn-sm btn-outline-success"
    // >
    //   Book
    // </button>
    // </div>
    // </div>
    // <br>
    // `;
    //       displayData2.appendChild(card2);
    //     });
  } catch {
    console.log("Error");
  }
};

function funcBook(hotelName, price) {}

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

displayData();

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
