/* Imagine that you need to create a catalog app for a car manu-
facturer. The company makes both cars and trucks; they can be
either electric or gas; all models have either manual controls
or an autopilot.
 */
// solution with inheritance
// abstract class Transporter {
//   protected engine: any;
//   abstract deliver(): void;
// }
// abstract class Truck extends Transporter {
//   constructor() {
//     super();
//   }
// }
// abstract class Car extends Transporter {
//   constructor() {
//     super();
//   }
// }
// abstract class ElectricalEngineTruck extends Truck {}
// abstract class CombustionEngineTruck extends Truck {}

// abstract class ElectricalEngineCar extends Car {}
// abstract class CombustionEngineCar extends Car {}

// class AutoPilotElectricalEngineTruck extends ElectricalEngineTruck {
//   deliver(): void {}
// }
// class AutoPilotCombustionEngineTruck extends CombustionEngineTruck {
//   deliver(): void {}
// }

// class AutoPilotElectricalEngineCar extends ElectricalEngineCar {
//   deliver(): void {}
// }
// class AutoPilotCombustionEngineCar extends CombustionEngineCar {
//   deliver(): void {}
// }

// solution with composition

interface IEngine {
  move(): void;
}
interface IDriver {
  navigate(): void;
}

abstract class Transporter {
  protected _engine: IEngine;
  protected _driver: IDriver;
  constructor(engine: IEngine, driver: IDriver) {
    this._engine = engine;
    this._driver = driver;
  }
  abstract deliver(): void;
}

class CombustionEngine implements IEngine {
  move(): void {}
}
class ElectricalEngine implements IEngine {
  move(): void {}
}

class Robot implements IDriver {
  navigate(): void {}
}
class Human implements IDriver {
  navigate(): void {}
}

class Car extends Transporter {
  constructor(engine: IEngine, driver: IDriver) {
    super(engine, driver);
  }
  deliver(): void {}
}
class Truck extends Transporter {
  constructor(engine: IEngine, driver: IDriver) {
    super(engine, driver);
  }
  deliver(): void {}
}

const electricalEnginWithAutoPilotCar = new Car(
  new ElectricalEngine(),
  new Robot()
);
const combustionEnginWithHumanCar = new Car(
  new CombustionEngine(),
  new Human()
);
const electricalEnginWithAutoPilotTruck = new Car(
  new ElectricalEngine(),
  new Robot()
);
const combustionEnginWithHumanTruck = new Car(
  new CombustionEngine(),
  new Human()
);
