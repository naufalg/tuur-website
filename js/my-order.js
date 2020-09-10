// jshint esversion:10
// {/* <li class="list-group-item">
// <button class="btn btn-danger rounded-circle">X</button>
// &nbsp; &nbsp;Product 1 | $100
// </li> */}

// dynamic navbar
let displayOrder = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      let noticeDiv = document.querySelector(".no-order");
      let TextNotice = document.createElement("p");
      TextNotice.className = " text-center col";
      TextNotice.innerHTML = `Login first to make order ¯\\_(ツ)_/¯`;
      let goToOrderBtn = document.createElement("a");
      goToOrderBtn.className = "btn btn-outline-info";
      goToOrderBtn.setAttribute("href", "../login/login.html");
      goToOrderBtn.innerHTML = "Login";
      noticeDiv.appendChild(TextNotice);
      noticeDiv.appendChild(goToOrderBtn);
    } else {
      let response = await fetch(
        `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${user.id}/order/`
      );
      let data = await response.json();
      console.log("data", data);
      if (data < 1 || user === null) {
        let noticeDiv = document.querySelector(".no-order");
        let TextNotice = document.createElement("p");
        TextNotice.className = " text-center col";
        TextNotice.innerHTML = "You don't have any order (‘◇’)?";
        let goToOrderBtn = document.createElement("a");
        goToOrderBtn.className = "btn btn-outline-info";
        goToOrderBtn.setAttribute("href", "../Product/product.html");
        goToOrderBtn.innerHTML = "Order now!";
        noticeDiv.appendChild(TextNotice);
        noticeDiv.appendChild(goToOrderBtn);
      } else {
        let orderUl = document.querySelector(".display-order");
        data.forEach((element) => {
          let orderList = document.createElement("li");
          orderList.className = "list-group-item";
          let btnCancel = document.createElement("button");
          btnCancel.className = "btn btn-danger rounded-circle";
          btnCancel.addEventListener("click", function () {
            funcDelete(user.id, element.id);
          });
          btnCancel.innerHTML = "X";
          orderList.innerHTML = `&nbsp; &nbsp;${element.hotel} | $ ${element.price}&nbsp; &nbsp;`;
          orderUl.appendChild(orderList);
          orderList.appendChild(btnCancel);
        });
        let divCheckout = document.querySelector(".btn-checkout");
        let checkoutBtn = document.createElement("a");
        checkoutBtn.setAttribute("href", "../checkout/checkout.html");
        checkoutBtn.className = "btn btn-success";
        checkoutBtn.innerHTML = "Checkout";
        divCheckout.appendChild(checkoutBtn);
      }
    }
  } catch {}
};

// get order data
displayOrder();

// delete order data
let funcDelete = (idUser, idProduct) => {
  let urlDel = `https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Users/${idUser}/order/${idProduct}`;
  let delOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(urlDel, delOptions)
    .then((response) => {
      response.json();
    })
    .then(() => {
      alert("Product deleted");
      location.reload();
    });
};


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
        let badgeSpan = document.querySelector(".badge");
        badgeSpan.innerHTML = `${data.length}`;
      }
    }
  } catch {}
};

badgeOrder();
// badge order
