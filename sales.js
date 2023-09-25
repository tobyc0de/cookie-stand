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

const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

const tokyo = {
  location: "tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

const dubai = {
  location: "dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

const paris = {
  location: "paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

const lima = {
  location: "lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

// Adding to HTML with a Loopdeeloop
const locations = [seattle, tokyo, dubai, paris, lima];

for (ix = 0; ix < locations.length; ix++) {
  locations[ix].calculateSales();
  console.log("asd: " + locations[ix]);

  const listOfShops = document.getElementById("listOfShops");
  const article = document.createElement("article");
  listOfShops.appendChild(article);
  const h2 = document.createElement("h2");
  h2.textContent = locations[ix].location;
  article.appendChild(h2);
  const ul = document.createElement("ul");
  article.appendChild(ul);
  for (i = 0; i < hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${hours[i]}: ${locations[ix].cookiesPerHour[i]}`;
    console.log(li);
    ul.appendChild(li);
  }
  const li2 = document.createElement("li");
  li2.textContent = `Total: ${locations[ix].totalCookiesSold}`;
  ul.appendChild(li2);
}
