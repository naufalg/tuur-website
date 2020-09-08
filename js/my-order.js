// jshint esversion:10
// {/* <li class="list-group-item">
// <button class="btn btn-danger rounded-circle">X</button>
// &nbsp; &nbsp;Product 1 | $100
// </li> */}

let displayOrder = () => {
  let orderData = JSON.parse(localStorage.getItem("order"));
  console.log("orderdata", orderData);
  let orderUl = document.querySelector(".display-order");
  let orderList = document.createElement("li");
  orderList.className = "list-group-item";
  let btnCancel = document.createElement("button");
  btnCancel.className = "btn btn-danger rounded-circle";
  btnCancel.innerHTML = "X";
  orderData.forEach(element => {
    orderList.innerHTML = `&nbsp; &nbsp;${element.hotelName} | $ ${element.price}`;

  });
  orderUl.appendChild(orderList);
  orderList.appendChild(btnCancel);
};

displayOrder();
