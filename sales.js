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
const seattle = new LocationFactory("seattle", 23, 65, 6.3, [], [], 0);
const tokyo = new LocationFactory("tokyo", 3, 12, 1.2, [], [], 0);
const dubai = new LocationFactory("dubai", 11, 38, 3.7, [], [], 0);
const paris = new LocationFactory("paris", 20, 38, 2.3, [], [], 0);
const lima = new LocationFactory("lima", 2, 16, 4.6, [], [], 0);

LocationFactory.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const randNum = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(randNum);
    this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    this.totalCookiesSold += this.cookiesPerHour[i];
  }
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
//put Total cell into header row
const totalCell = document.createElement("th");
totalCell.textContent = "Total";
headerRow.appendChild(totalCell);

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

console.log(seattle);

seattle.calculateSales();
tokyo.calculateSales();
dubai.calculateSales();
paris.calculateSales();
lima.calculateSales();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// Calc Totals for each hour
for (i = 0; i < hours.length; i++) {
  hourlyTotal[i] =
    seattle.cookiesPerHour[i] +
    tokyo.cookiesPerHour[i] +
    dubai.cookiesPerHour[i] +
    paris.cookiesPerHour[i] +
    lima.cookiesPerHour[i];
  console.log(hourlyTotal);
}

// create bottom row
const bottomRow = document.createElement("tr");
shopTable.appendChild(bottomRow);
// add Totals cell
const totalCell2 = document.createElement("td");
totalCell2.textContent = "Total";
bottomRow.appendChild(totalCell2);
// Add hourlyTotals to table
for (i = 0; i < hourlyTotal.length; i++) {
  const hourlyTotalTD = document.createElement("td");
  hourlyTotalTD.textContent = hourlyTotal[i];
  bottomRow.appendChild(hourlyTotalTD);
}

// const dubai = {
//   location: "dubai",
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesPerCust: 3.7,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookiesSold: 0,
//   calculateSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       const randNum = randomNumber(this.minCust, this.maxCust);
//       this.customersPerHour.push(randNum);
//       this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
//       this.totalCookiesSold += this.cookiesPerHour[i];
//     }
//   },
// };

// const paris = {
//   location: "paris",
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesPerCust: 2.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookiesSold: 0,
//   calculateSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       const randNum = randomNumber(this.minCust, this.maxCust);
//       this.customersPerHour.push(randNum);
//       this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
//       this.totalCookiesSold += this.cookiesPerHour[i];
//     }
//   },
// };

// const lima = {
//   location: "lima",
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesPerCust: 4.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookiesSold: 0,
//   calculateSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       const randNum = randomNumber(this.minCust, this.maxCust);
//       this.customersPerHour.push(randNum);
//       this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
//       this.totalCookiesSold += this.cookiesPerHour[i];
//     }
//   },
// };

// // Adding to HTML with a Loopdeeloop
// const locations = [seattle, tokyo, dubai, paris, lima];
