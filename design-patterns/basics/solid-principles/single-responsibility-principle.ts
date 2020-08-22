// BEFORE: the class contains several different behaviors
// class Employee {
//   private name: string;
//   getName(): void {}
//   printTimeSheetReport(): void {}
// }

// AFTER: the extra behavior is in it's own class

class Employee {
  private name: string;
  getName(): void {}
}
interface ITimeSheetReport {
  print(): void;
}
class TimeSheetReport implements ITimeSheetReport {
  print(): void {}
}
// example 2
