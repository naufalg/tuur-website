// jshint esversion:10

let displayData = async () => {
  try {
    let url1 = "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/hotel";
    let img1 = "../../assets/images/hotel-bedroom.jpg";
    let response1 = await fetch(url1);
    let data1 = await response1.json();
    data1.forEach((element) => {
      let displayData1 = document.querySelector(".display-data1");
      let card1 = document.createElement("div");
      card1.className = "col-md-4";
      card1.innerHTML = `
      <div class="card slideanim">
      <img class="card-img-top" src=${img1} alt="Card image cap">

<div class="card-body">
  <h5 class="card-title">${element.hotel}</h5>
  <p class="card-text">
  $ ${element.price}/night
  </p>
  <button
  type="button"
  class="btn btn-sm btn-outline-success"
>
  Book
</button>
</div>
</div>
<br>
`;
      displayData1.appendChild(card1);
    });

    let url2 = "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/Attraction";
    let img2 = "../../assets/images/ferris-wheel.jpg";
    let response2 = await fetch(url2);
    let data2 = await response2.json();
    data2.forEach((element) => {
      let displayData2 = document.querySelector(".display-data2");
      let card2 = document.createElement("div");
      card2.className = "col-md-4";
      card2.innerHTML = `
      <div class="card slideanim">
      <img class="card-img-top" src=${img2} alt="Card image cap">

<div class="card-body">
  <h5 class="card-title">${element.attraction}</h5>
  <p class="card-text">
  $ ${element.price}/night
  </p>
  <button
  type="button"
  class="btn btn-sm btn-outline-success"
>
  Book
</button>
</div>
</div>
<br>
`;
      displayData2.appendChild(card2);
    });
  } catch {
    console.log("Error");
  }
};

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
