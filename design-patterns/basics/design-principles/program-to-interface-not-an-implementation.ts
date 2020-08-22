/*Imagine that you’re creat-
ing a software development company simulator. You have dif-
ferent classes that represent various employee types.*/

// tightly coupled
// class Company {
//   createSoftware(): void {
//     const designer = new Designer();
//     const programmer = new Programmer();
//     const tester = new Tester();

//     designer.designArchitecture();
//     programmer.writeCode();
//     tester.testSoftware();
//   }
// }
// class Designer {
//   designArchitecture(): void {
//     console.log("i am designing architecture");
//   }
// }
// class Programmer {
//   writeCode(): void {
//     console.log("i am coding");
//   }
// }
// class Tester {
//   testSoftware(): void {
//     console.log("i am testing software");
//   }
// }

// const microsoft = new Company();
// microsoft.createSoftware();

/* less loose couple more tightly couple
 because we still depend on concrete employee classes */
// interface Employee {
//   doWork(): void;
// }

// class Company {
//   private _employees: Employee[];
//   constructor() {
//     this._employees = [new Designer(), new Programmer(), new Tester()];
//   }
//   createSoftware(): void {
//     this._employees.forEach((employee) => {
//       employee.doWork();
//     });
//   }
// }
// class Designer implements Employee {
//   doWork(): void {
//     console.log("i am designing architecture");
//   }
// }
// class Programmer implements Employee {
//   doWork(): void {
//     console.log("i am coding");
//   }
// }
// class Tester implements Employee {
//   doWork(): void {
//     console.log("i am testing software");
//   }
// }

// const microsoft = new Company();
// microsoft.createSoftware();

/* loose couple */
interface Employee {
  doWork(): void;
}

abstract class Company {
  private _employees: Employee[];

  createProduct(): void {
    this.getEmployees().forEach((employee) => {
      employee.doWork();
    });
  }
  abstract getEmployees(): Employee[];
}
class Designer implements Employee {
  doWork(): void {
    console.log("i am designing architecture");
  }
}
class Programmer implements Employee {
  doWork(): void {
    console.log("i am coding");
  }
}
class Tester implements Employee {
  doWork(): void {
    console.log("i am testing software");
  }
}

class SoftwareCompany extends Company {
  constructor() {
    super();
  }
  getEmployees(): Employee[] {
    return [new Designer(), new Programmer(), new Tester()];
  }
}

class DesigningCompany extends Company {
  constructor() {
    super();
  }
  getEmployees(): Employee[] {
    return [new Designer(), new Programmer()];
  }
}
const futur = new DesigningCompany();
const microsoft = new SoftwareCompany();
futur.createProduct();
microsoft.createProduct();
