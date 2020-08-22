// interface IRoundShape {
//     getRadius(): number;
// }
// interface ISquareShape {
//     getWidth(): number;
// }
// class RoundHole implements IRoundShape {
//     private _radius: number;
//     constructor(radius: number) {
//         this._radius = radius;
//     }
//     public getRadius(): number {
//         return this._radius;
//     }
//     fit(shape: IRoundShape): boolean {
//         return this.getRadius() >= shape.getRadius();
//     }
// }

// class Cylinder implements IRoundShape {
//     private _radius: number;
//     constructor(radius: number) {
//         this._radius = radius;
//     }
//     getRadius(): number {
//         return this._radius;
//     }
// }

// class Box implements ISquareShape {
//     private _width: number;
//     constructor(width: number) {
//         this._width = width;
//     }
//     getWidth(): number {
//         return this._width;
//     }
// }

// const roundHole = new RoundHole(10);
// const cylinder = new Cylinder(8);
// const box = new Box(2);
// // console.log(roundHole.fit(cylinder)); // it fits
// // console.log(roundHole.fit(box));// not fits

// // creating box adapter for round hole
// class BoxAdapter implements IRoundShape {
//     private _shape: ISquareShape;
//     constructor(shape: ISquareShape) {
//         this._shape = shape;
//     }
//     getRadius(): number {
//         return (this._shape.getWidth() * Math.sqrt(2)) / 2;
//     }
// }

// const boxAdapter = new BoxAdapter(box);
// console.log(roundHole.fit(boxAdapter));

// ---------------------------------------------

/**
 * second example:
 * When you travel from the US to Europe for the first time, you
 * may get a surprise when trying to charge your laptop. The
 * power plug and sockets standards are different in different
 * countries.
 * That’s why your US plug won’t fit a German socket. The problem
 * can be solved by using a power plug adapter that has the
 * American-style socket and the European-style plug.
 */

interface ISocket {
    fitPlug(plug: any): boolean;
}
interface IIndianPlug {
    threePinPlug(): void;
}
interface IAmericanPlug {
    twoPinPlug(): void;
}

class IndianSocket implements ISocket {
    fitPlug(plug: IIndianPlug): boolean {
        return true;
    }
}
class AmericanSocket implements ISocket {
    fitPlug(plug: IAmericanPlug): boolean {
        return true;
    }
}

class IndianPlug implements IIndianPlug {
    threePinPlug(): void {}
}
class AmericanPlug implements IAmericanPlug {
    twoPinPlug(): void {}
}

const americanSocket = new AmericanSocket();
const americanLaptopPlug = new AmericanPlug();
const indianLaptopPlug = new IndianPlug();

// americanSocket.fitPlug(americanLaptopPlug); // compatible
// americanSocket.fitPlug(indianLaptopPlug); // not compatible

// solution will be make power plug adapter that take any type of plug and
// fit into any require socket
