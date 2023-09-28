function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hours = [
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function LocationFactory(
  location,
  minCust,
  maxCust,
  avgCookiesPerCust,
  customersPerHour,
  cookiesPerHour,
  totalCookiesSold
) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookiesSold = totalCookiesSold;
}

let hourlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let LocationsList = [];
LocationFactory.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const randNum = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(randNum);
    this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    this.totalCookiesSold += this.cookiesPerHour[i];
    hourlyTotal[i] += this.cookiesPerHour[i];
  }
  console.log(
    `added hourlytotal ${this.cookiesPerHour} to the hourlytotal ${hourlyTotal}`
  );
};

LocationFactory.prototype.addToList = function () {
  LocationsList.push(this.location);
};

LocationFactory.prototype.render = function () {
  // create location row
  const locationRow = document.createElement("tr");
  // append row to table
  shopTable.appendChild(locationRow);
  // create name TD
  const LocationTD = document.createElement("td");
  // add text into TD
  LocationTD.textContent = this.location;
  // put name td into table row
  locationRow.appendChild(LocationTD);
  // create hourly cookies td
  for (i = 0; i < hours.length; i++) {
    const hourlyTD = document.createElement("td");
    hourlyTD.textContent = this.cookiesPerHour[i];
    locationRow.appendChild(hourlyTD);
  }

  // create  and append totalcookies TD
  const totalCookiesTD = document.createElement("td");
  totalCookiesTD.textContent = this.totalCookiesSold;
  locationRow.appendChild(totalCookiesTD);
};

// take element tableOfShops
const tableDiv = document.getElementById("tableOfShops");
//create table
const shopTable = document.createElement("table");
tableDiv.appendChild(shopTable);
// create header row
const headerRow = document.createElement("tr");
// append header row to table
shopTable.appendChild(headerRow);
//put empty cell into header row
const emptyCell = document.createElement("td");
headerRow.appendChild(emptyCell);
// put hours into header row
for (i = 0; i < hours.length; i++) {
  const headerTD = document.createElement("th");
  headerTD.textContent = hours[i];
  headerRow.appendChild(headerTD);
}
// put Total cell into header row
const totalCell = document.createElement("th");
totalCell.textContent = "Total";
headerRow.appendChild(totalCell);

LocationFactory.prototype.addTotalRow = function () {
  // create bottom row
  const bottomRow = document.createElement("tr");
  shopTable.appendChild(bottomRow);
  bottomRow.classList.add("totalrow");

  // add Totals cell
  const totalCell2 = document.createElement("td");
  totalCell2.textContent = "Total";
  totalCell2.id = "bottom row total text";
  bottomRow.appendChild(totalCell2);
  // Add hourlyTotals to table
  for (i = 0; i < hours.length; i++) {
    const hourlyTotalTD = document.createElement("td");
    hourlyTotalTD.textContent = hourlyTotal[i];
    bottomRow.appendChild(hourlyTotalTD);
  }
  console.log(LocationsList);
};

const seattle = new LocationFactory("seattle", 2, 10, 1.4, [], [], 0);
const tokyo = new LocationFactory("tokyo", 3, 12, 1.2, [], [], 0);
// const dubai = new LocationFactory("dubai", 1, 4, 1.7, [], [], 0);
// const paris = new LocationFactory("paris", 2, 8, 2.3, [], [], 0);
// const lima = new LocationFactory("lima", 2, 6, 2.6, [], [], 0);
// const cambridge = new LocationFactory("cambridge", 3, 10, 4.2, [], [], 0);

seattle.calculateSales();
tokyo.calculateSales();
// dubai.calculateSales();
// paris.calculateSales();
// lima.calculateSales();
// cambridge.calculateSales();

seattle.render();
tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
// cambridge.render();

seattle.addToList();
tokyo.addToList();

tokyo.addTotalRow();

console.log(seattle);
// dubai.addToList();
// paris.addToList();
// lima.addToList();
// cambridge.addToList();

// UUUUSER INPUT!
const newPlace = document.getElementById("newlocationform");

newPlace.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    const newLocName = event.target.location.value;
    const minCust = event.target.minCust.value;
    const maxCust = event.target.maxCust.value;
    const avgCookiesPerCust = event.target.avgCookiesPerCust.value;
    let totalCookiesSold;

    const createNewPlace = new LocationFactory(
      newLocName,
      +minCust,
      +maxCust,
      +avgCookiesPerCust,
      [],
      [],
      0
    );
    console.log(createNewPlace);
    createNewPlace.calculateSales();
    hourlyTotal.push(totalCookiesSold);
    createNewPlace.addToList();
    console.log(LocationsList);
    createNewPlace.render();
    createNewPlace.addTotalRow();
  }

  //closing the event listener
);

// END OF USER INPUT!
