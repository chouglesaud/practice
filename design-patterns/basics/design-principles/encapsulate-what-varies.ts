//Encapsulation on method level

// without encapsulation
type product = { price: number; quantity: number };

type order = {
  products: product[];
  country: string;
};
// function getOrderTotal(order: order): number {
//   let total = 0;
//   order.products.forEach((item) => {
//     total += item.price * item.quantity;
//   });
//   if (order.country === "IND") {
//     total += total * 0.05;
//   } else if (order.country === "US") {
//     total += total * 0.2;
//   }

//   return total;
// }
const myOrder: order = {
  products: [
    { price: 45, quantity: 2 },
    { price: 45, quantity: 2 },
    { price: 45, quantity: 2 },
  ],
  country: "US",
};

// console.log(getOrderTotal(myOrder));

// // with encapsulation
// function getOrderTotal(order: order): number {
//   let total = 0;
//   order.products.forEach((item) => {
//     total += item.price * item.quantity;
//   });

//   total += total * getTaxRate(order.country);
//   return total;
// }
// function getTaxRate(country: string): number {
//   if (country === "US") {
//     return 0.2;
//   } else if (country === "IND") {
//     return 0.05;
//   } else {
//     return 0;
//   }
// }

// encapsulation on class level

interface ITaxCalculator {
  getTaxRate(country: string): number;
}

class Order {
  private _taxCalculator: ITaxCalculator;
  private _order: order;
  private _country: string;
  constructor(order: order, taxCalculator: any) {
    this._order = order;
    this._taxCalculator = new taxCalculator();
  }
  public getOrderTotal(): number {
    let total = 0;
    this._order.products.forEach((item) => {
      total += item.price * item.quantity;
    });

    total += total * this._taxCalculator.getTaxRate(this._country);
    return total;
  }
}

class TaxCalculator implements ITaxCalculator {
  getTaxRate(country: string): number {
    if (country === "US") return this._getUSTax();
    if (country === "IND") return this._getINDTax();
    return this._defaultTax();
  }
  private _getUSTax(): number {
    return 0.2;
  }
  private _getINDTax(): number {
    return 0.05;
  }
  private _defaultTax(): number {
    return 0;
  }
}

const order = new Order(myOrder, TaxCalculator);
console.log(order.getOrderTotal());
