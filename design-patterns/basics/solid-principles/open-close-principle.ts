//Classes should be open for extension but closed for modification

// BEFORE: you have to change the Order class whenever you add a new
// shipping method to the app.

// class Order {
//   protected lineItems: any;
//   protected _shiping: any;
//   getTotal(): void {}
//   setShippingType(): void {}
//   setShippingCost(): number {
//     if (this._shiping === "ground") return 100;
//     if (this._shiping === "air") return 200;
//   }
// }

// AFTER: adding a new shipping method doesn’t require changing
// existing classes.

interface Shipping {
  getCost(order): number;
}

class Order {
  protected _lineItems: any;
  protected _shipping: Shipping;
  constructor(shippingType: Shipping) {
    this._shipping = shippingType;
  }
  getShippingCost(): number {
    return this._shipping.getCost(this);
  }
}

class Ground implements Shipping {
  getCost(order): number {
    return 100;
  }
}
class Air implements Shipping {
  getCost(order): number {
    return 200;
  }
}
