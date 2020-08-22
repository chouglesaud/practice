interface ICustomer {
    order(product: string): void;
}
interface IEcommerce {
    recieveOrder(order: string): void;
}

class Customer implements ICustomer {
    protected _name: string;
    protected _ecommerce: IEcommerce;
    constructor(name: string, ecommerce: IEcommerce) {
        this._name = name;
        this._ecommerce = ecommerce;
    }
    order(product: string): void {
        this._ecommerce.recieveOrder(product);
    }
}
class Ecommerce implements IEcommerce {
    recieveOrder(order: string): void {
        console.log(`${order} order recieved`);
    }
    public deliver(): void {
        this._searchProductInInventory();
        this._packageOrder();
        this._generateBill();
    }
    private _searchProductInInventory(): void {
        console.log("searching product in inverntry");
    }
    private _packageOrder(): void {
        console.log("packaging order");
    }
    private _generateBill(): void {
        console.log("generating Bill");
    }
}

const amazon = new Ecommerce();
const rahul = new Customer("rahul", amazon);

rahul.order("laptop");

amazon.deliver();
