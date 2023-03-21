// var prod1 = {
//   name: "Lait",
//   expired: true,
//   price: 140,
//   qty: 400,
//   sell: function (qty) {
//     if (this.expired) {
//       console.log("This product is expired");
//       return 0;
//     } else {
//       console.log(`${this.name}:${this.price}`);
//       this.qty = this.qty - qty;
//       return this.price * qty;
//     }
//   },
// };

// var prod2 = {
//   name: "Soda",
//   price: 100,
//   expired: false,
//   qty: 200,
//   sell: function (qty) {
//     if (this.expired) {
//       console.log("This product is expired");
//       return 0;
//     } else {
//       console.log(`${this.name}:${this.price}`);
//       this.qty = this.qty - qty;
//       return this.price * qty;
//     }
//   },
// };

// var prod3 = {
//   name: "Eau",
//   price: 220,
//   expired: true,
//   qty: 150,
//   sell: function (qty) {
//     if (this.expired) {
//       console.log("This product is expired");
//       return 0;
//     } else {
//       console.log(`${this.name}:${this.price}`);
//       this.qty = this.qty - qty;
//       return this.price * qty;
//     }
//   },
// };

// var prod4 = {
//   name: "Fromage",
//   price: 190,
//   qty: 300,
//   sell: function (qty) {
//     if (this.expired) {
//       console.log("This product is expired");
//       return 0;
//     } else {
//       console.log(`${this.name}:${this.price}`);
//       this.qty = this.qty - qty;
//       return this.price * qty;
//     }
//   },
// };

// var prods = [prod1, prod2, prod3, prod4];

// for (var i = 0; i < prods.length; i++) {
//   console.log(i + 1 + ": " + prods[i].name);
// }

// var prodCode,
//   total = 0,
//   c = "yes";

// while (c == "yes") {
//   prodCode = prompt("ENter the product code");
//   prodQty = prompt("How many product do you want sell ?");
//   total = total + prods[prodCode - 1].sell(prodQty);
//   console.log(`total :${total} `);
//   c = prompt("Do you want to add another product");
// }

//document.body.children[1].innerHTML = "Hello i changed";

// document.getElementsByTagName("p")[0].innerHTML = "Hello I changed";

// document.getElementById("output").innerHTML = "Hello I changed again";

// document.getElementsByClassName("output")[0].innerHTML ="Hello i changed again again";

// document.querySelector(".output").innerHTML = "hello";

// outputP.innerHTML = "This is the new hello";
// outputP.style.color = "ligthcolar";
// outputP.style.backgroudColor = "red";

// var outputP = document.querySelector(".output");
// var input = document.querySelector(".user-inpt");

// console.dir(input.value);

// function showText() {
//   outputP.innerHTML = input.value;
//   outputP.style.color = "red";
// }

var prod1 = {
  name: "Arabica coffee",
  price: 1400,
  qty: 400,
  sell: function (qty) {
    this.qty = this.qty - qty;
    return this.price * qty;
  },
  minus: function (qty) {
    this.qty = this.qty + qty;
    return this.price * qty;
  },
};

var prod2 = {
  name: "Soda",
  price: 100,
  expired: false,
  qty: 200,
  sell: function (qty) {
    if (this.expired) {
      product_select.innerHTML = "This product is expired";
      return 0;
    } else {
      product_select.innerHTML = `${this.name}:${this.price}`;
      this.qty = this.qty - qty;
      return this.price * qty;
    }
  },
};

var prod3 = {
  name: "Eau",
  price: 220,
  expired: true,
  qty: 150,
  sell: function (qty) {
    if (this.expired) {
      product_select.innerHTML = "This product is expired";
      return 0;
    } else {
      product_select.innerHTML = `${this.name}:${this.price}`;
      this.qty = this.qty - qty;
      return this.price * qty;
    }
  },
};

var prod4 = {
  name: "Fromage",
  price: 190,
  qty: 300,
  sell: function (qty) {
    if (this.expired) {
      product_select.innerHTML = "This product is expired";
      return 0;
    } else {
      product_select.innerHTML = `${this.name}:${this.price}`;
      this.qty = this.qty - qty;
      return this.price * qty;
    }
  },
};

var prods = [prod1, prod2, prod3, prod4];
var prodList = document.querySelectorAll(".prod");

for (var i = 0; i < prodList.length; i++) {
  prodList[i].innerHTML = prods[i].name + " Price " + prods[i].price;
}

var prodCode = document.querySelector(".prod_code");
var prodQty = document.querySelector(".qty");
var product_select = document.querySelector(".product_select");
var product_total_price = document.querySelector(".product_total_price");
var total = 0;
function showProduct() {
  // product_select.innerHTML = `${prodCode.value} : ${prods[prodCode-1].name} AND  Price${prods[procCode-1].price} : `;
  total += prods[prodCode.value - 1].sell(prodQty.value);
  product_total_price.innerHTML = total;
}

var heart = document.querySelector(".heart");

function heartRed() {
  document.getElementById("heart").src = "res/icone/coeur_rouge_32px.png";
  document
    .getElementById("heart")
    .setAttribute("onclick", "heartTransparent()");
}

function heartTransparent() {
  document.getElementById("heart").src = "res/icone/coeur_32px.png";
  document.getElementById("heart").setAttribute("onclick", "heartRed()");
}

var add_coffee1 = document.querySelector(".add_coffee1");
var minus_coffee1 = document.querySelector(".minus_coffee1");
var panier_total = document.querySelector(".panier_total");

var caisse_total = document.querySelector(".caisse_total");
function addCoffee1() {
  add_coffee1.src = "res/icone/plus.png";
  add_coffee1.setAttribute("onclick", "addCoffee1Transparent()");
  total_panier = Number(panier_total.value) + 1;
  panier_total.value = total_panier;

  total_caisse = prods[0].sell(total_panier);

  total_caisse_2 = (Math.round(total_caisse * 100) / 100).toFixed(2);

  caisse_total.value = total_caisse_2 + " DA";
}

function addCoffee1Transparent() {
  add_coffee1.src = "res/icone/plus_black.png";
  add_coffee1.setAttribute("onclick", "addCoffee1()");

  total_panier = Number(panier_total.value) + 1;
  panier_total.value = total_panier;

  total_caisse = prods[0].sell(total_panier);

  total_caisse_2 = (Math.round(total_caisse * 100) / 100).toFixed(2);

  caisse_total.value = total_caisse_2 + " DA";
}

function minusCoffee1() {
  minus_coffee1.src = "res/icone/minus-sign.png";
  minus_coffee1.setAttribute("onclick", "minusCoffee1Transparent()");
  if (Number(panier_total.value) > 0) {
    total_panier = Number(panier_total.value) - 1;
    panier_total.value = total_panier;

    total_caisse = prods[0].minus(total_panier);

    total_caisse_2 = (Math.round(total_caisse * 100) / 100).toFixed(2);

    caisse_total.value = total_caisse_2 + " DA";
  }
}

function minusCoffee1Transparent() {
  minus_coffee1.src = "res/icone/minus.png";
  minus_coffee1.setAttribute("onclick", "minusCoffee1()");
  if (Number(panier_total.value) > 0) {
    total_panier = Number(panier_total.value) - 1;
    panier_total.value = total_panier;

    total_caisse = prods[0].minus(total_panier);

    total_caisse_2 = (Math.round(total_caisse * 100) / 100).toFixed(2);

    caisse_total.value = total_caisse_2 + " DA";
  }
}
