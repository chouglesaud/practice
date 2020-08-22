// High-level classes shouldn’t depend on low-level class-
// es. Both should depend on abstractions. Abstractions

// shouldn’t depend on details. Details should depend on
// abstractions.

// Low-level classes implement basic operations such as working
// with a disk, transferring data over a network, connecting to a
// database, etc.

// High-level classes contain complex business logic that directs
// low-level classes to do something.

// BEFORE: a high-level class depends on a low-level class

// class BudgetReport {
//   private _database: MongoDBDatabase;
//   constructor() {
//     this._database = new MongoDBDatabase();
//   }
//   open(data: any): void {
//     this._database.find(data);
//   }
//   save(data: any): void {
//     this._database.insert(data);
//   }
// }
// class MongoDBDatabase {
//   find(data: any): void {
//     console.log("data found");
//   }
//   insert(data: any) {
//     console.log("data saved");
//   }
// }
// const myBudgetReport = new BudgetReport();
// myBudgetReport.open("data");
// myBudgetReport.save("data");

// AFTER: low-level classes depend on a high-level abstraction.

interface Database {
  insert(): void;
  update(): void;
  delete(): void;
}

class BudgetReport {
  private _database: Database;
  constructor(database: any) {
    this._database = new database();
  }
}

class MySQL implements Database {
  constructor() {}
  insert(): void {}
  update(): void {}
  delete(): void {}
}

class MongoDb implements Database {
  constructor() {}
  insert(): void {}
  update(): void {}
  delete(): void {}
}

const budgetReport1 = new BudgetReport(MongoDb);
const budgetReport2 = new BudgetReport(MySQL);
