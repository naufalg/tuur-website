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

// badge order
let badgeOrder = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
    } else {
      let response = await fetch(
        `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}/order/`
      );
      let data = await response.json();
      console.log(data);
      if (data < 1 || user === null) {
      } else {
        let badgeSpan = document.querySelector(".badge-nav");
        badgeSpan.innerHTML = `${data.length}`;
      }
    }
  } catch {}
};

badgeOrder();
// badge order

// checkout data
let checkoutData = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
    } else {
      let response = await fetch(
        `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}/order/`
      );
      let data = await response.json();
      console.log("data", data);
      if (data < 1 || user === null) {
      } else {
        let checkotUl = document.querySelector(".checkout-data");
        data.forEach((element) => {
          let checkoutList = document.createElement("li");
          checkoutList.className =
            "list-group-item d-flex justify-content-between lh-condensed";
          //   create div
          let divList = document.createElement("div");
          //   create order title
          let orderTitle = document.createElement("h6");
          orderTitle.className = "my-0";
          orderTitle.innerHTML = `${element.hotel}`;
          //   create span price
          let spanPrice = document.createElement("span");
          spanPrice.className = "text-muted";
          spanPrice.innerHTML = `$ ${element.price}`;
          //   appendchild
          checkotUl.appendChild(checkoutList);
          checkoutList.appendChild(divList);
          divList.appendChild(orderTitle);
          divList.appendChild(spanPrice);
        });

        // total price
        let newPrice = [];
        data.forEach((element) => {
          let oldPrice = `${parseInt(element.price)}`;
          console.log("oldprice", oldPrice);
          newPrice.push(oldPrice);
        });
        console.log("newPrice", newPrice);
        let priceTotal = newPrice.reduce(function (a, b) {
          return parseInt(a) + parseInt(b);
        }, 0);
        console.log("priceTotal", priceTotal);

        let totalPriceLi = document.createElement("li");
        totalPriceLi.className =
          "list-group-item d-flex justify-content-between";
        let spanTotalPrice = document.createElement("span");
        spanTotalPrice.innerHTML = `Total (USD)`;
        let strongTotalPrice = document.createElement("strong");
        strongTotalPrice.innerHTML = `$ ${priceTotal}`;
        checkotUl.appendChild(totalPriceLi);
        totalPriceLi.append(spanTotalPrice);
        totalPriceLi.appendChild(strongTotalPrice);

        // badge cart
        let badgeCart = document.querySelector(".badge-cart");
        let cartValue = data.length;
        badgeCart.innerHTML = cartValue;
      }
    }
  } catch {}
};

checkoutData();
// checkoutData

// bookNow
let bookNow = async () => {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user.id);
  let delOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  //   let urlDel = `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}/order/`;
  let response = await fetch(
    `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}/order/`
  );
  let data = await response.json();
  console.log("data", data);
  data.forEach(async (element, index) => {
    console.log(element.id);
    console.log(index);
    let fetchingData = await fetch(
      `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}/order/${element.id}`,
      delOptions
    );
    let data2 = await fetchingData.json();
    console.log("data2", data2);
  });

  //   alert
  Swal.fire({
    title: "Success!",
    text: "Check your e-mail for booking confirmation. \nHappy Getaway!",
    icon: "success",
    confirmButtonText: `OK`,
  }).then((result) => {
    if (result.isConfirmed) {
      location.replace("../../index.html");
    }
  });
};

// let funcDelete = () => {};
