class Department {
  /*
  a) public access modifier are the default state of the properties and methods of a class. Such properties are accessible from anywhere in the app e.g public name variable of Department class
  b) private access modifier are used on properties and methods of a class which makes them only accessible within the class they're created e.g a private id which is only accessible/modifiable within the scope of the class they're created in
  c) protected acess modifier is like private but unlike private, it is not only accessible only within this class but also within all classes that inherit from this class(i.e subclasses that extends this class) e.g protected employees of Department class
  d) readonly modifier are used the properties of a class to mark them immutable i.e their value CANNOT change after it has being initialized with a value. Just like declaring a variable with const.
  */

  // private readonly id: string; 
  // private name: string;

  // constructor(id: string, n: string) {
  //   this.id = id;
  //   this.name = n;
  // }

  protected employees: string[] = [];
  static fiscalYear: number = 2020;
  private test: string = "TEST";

  //SHORTHAND: When we define the constructor's parameters, for every parameter which has a specified access modifier, a property of the same name is automatically created on the fly
  constructor(protected readonly id: string, public name: string) {}
  //constructors are simply used to assign dynamic values to the properties of a class

  /*
  e) static modifier are used on properties and methods that are not to be accessed on an instance of a class but which can only be accessed (and called in case of static methods) directly by the owner class itself. They are also known as class fields/variables and class methods. They are often used for utility functions that one wants to be grouped together e.g Math.PI, Math.round(), Math.ceil(). These properties and methods are accessed on the Math class itself and not by instances of the Math constructor. Static properties and methods of super classes are also inherited by their subclasses (but not by the instances of both the sub and super classes) as long such prop/methods are not made private in the super class
  static methods CAN ONLY access static data (static fields/variables and other static methods). They CANNOT access non-static data. Also, non-static || instance methods CANNOT access static data (They can in java: instance methods can access static data because the object instance belongs to that class and can access it's variables). 
  static propertes and methods are inherited by sub classes that extend the super class where they're defined.
  AS LONG AS A METHOD IS NOT A STATIC METHOD, IT IS AN INSTANCE METHOD NO MATTER WHAT ACCESS MODIFIER IS USED ON IT. e.g if we have a private method in a class, that means that method should only be used as a helper function within a class and should never be accessible by an instance of that class. It is possible the public methods of the class which are accessible on an instance of the class uses that function to achieve sth internally. So when that public called by the instance, it in turns calls that private method which therefore makes such private method indirectly an instance method
  */
  static createEmployee(name: string) {
    return { name, year: this.fiscalYear };
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
    
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }

  private getTest() {  
    return this.test; //consoleTest is a an instance method (non-static method) therefore "this" = the object instance calling the method to get the private instance property "test". Well, the method is not directly accessible by the object instance as it is a private one. But the public method printTest which is within the scope of this class i.e has access to the private consoleTest method is directly accesible by the object instance.
  }

   printTest() {
    console.log(this.getTest()); // this is pointless as i can just do console.log(this.test) as the private "test" field is available within this scope. This is just for demonstration purpose
  }
}

//CCC: Inheritance occurs only within classes. This happens when a class (sub class) extends another class (super class). When this happens the properties and methods of the super class are inherited by the sub class. ALL PROPERTIES ARE INHERITED. IT IS ONLY THE LEVEL OF ACCESSIBILITY OF THESE PROPERTIES AND METHODS THAT DIFFERS BASED ON THE ACCESS MODIFIER USED WHEN THE PROPERTIES AND METHODS ARE DEFINED IN THEIR CLASS e.g private properties are inherited by can't be directly accessed (their values can't be gotten or modified directly) outside their class scope, that's why we use getters and setters for their accessibilty. Static data are also inherited. i.e if supStaticField and supStaticMethod are static field and method of a super class. SubClass.supStaticField and SubClass.supStaticMethod() are allowed as long as the access modifier allows it i.e They are not private or protected
//To instantiate a class means to create an object instance of that class which has properties and methods which were either defined in such class or were inherited from a super class. The accessibility (getting the value and modifying it) [e.g public: directly accessible, private/protected: not directly accessible] on such properties/methods then depends on the access mofifiers set when defining them 

/*
this is a class that will have the name, id, employees fields like the Department class up there plus some additional features more specific to the department set in it e.g admins
A class can only extend 1 class (a subclass can only directly inherit the properties of 1 super class). The constructor of the parent class is usually naturally used as an instantiator when our subclass is instantiated without any consturctor. If we do have a constructor, then super() must be called in the subclass constructor with the required argument of the base/super constructor which signifies the instantiation of the super constructor for the subclass then we can instantiate more of his own
*/

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  addAdmin(text: string) {
    this.admins.push(text);
  }

  printAdmins() {
    console.log(this.admins);
    this.printTest();
  }

  //so ITDeparment is a department with 2 additional methods(addAdmin and printAdmins) and an extra property (admins) that the super class doesnt have and yet we still get everything (properties and methods) from the super class
}

console.log(ITDepartment.fiscalYear); //2020
console.log(ITDepartment.createEmployee('Wale')); // { name: 'Wale', fiscalYear: 2020 }
const ITtesting = new ITDepartment('id1', ['Wale', 'Seun', 'Samuel']);
ITtesting.printTest(); //'TEST'

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  /*
  GETTERS are properties that are written like methods that are used to access private proporties outside of their class. We can also add more logic in the getter "function" before the proceesed value of the private class property is returned. Getter methods are used as properties and never called like functions because they always returns a property which are mostly private and we wish to get access to
  SETTERS are just like getters but instead of using them to read/access a value, we use them to set one and also add more logic before so. It is should be used as a property also.
  the name of GETTERS and SETTERS names should be closely related with the property they wish to give access to
  */
  set mostRecentReport(value: string) {
    //value == value to be set for most recent report (i.e lastReport)
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("no last report data found");
  }
  /*
  SINGLETON && PRIVATE CONSTRUCTORS: singleton pattern is used in OOP for ensuring you only have exactly 1 instance of a certain class and no more i.e when multiple instances of that class is created, they are all the same 1 single instance!
  This is achieved by creating a static method i.e getInstance which creates an instance of the class on its first call and returns such instance or it simply checks if we already have an instance and returns the instance. Private constructors are also generally used in a singleton. Now AccountingDepartment is a singleton and only 1 instance of it can be created (which is aiit cause the company actually only have one accounting department)
  Now calling new AccountingDeparment() anywhere outside the class will give an error as we can't do such as the constructor is a private one and can only be accessed within the class.
  so how we get the single instance of a singleton? we do so by calling the created static method. i.e AccountingDepartment.getInstance() which returns always returns the 1 single instance of the class we can ever have;
  */

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      //in static methods this == the class itself i.e AccountingDepartment and not the object instance created from the class
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  //overriding the describe method of Department super class where we do sth different specific to this class
  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  //overriding the addEmployee method of Department super class where we do sth different specific to this class
  addEmployee(name: string): void {
    if (name === "Wale") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Festus Yale");
console.log(employee1);
console.log(Department.fiscalYear);

// const accounting = new AccountingDepartment("a4", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

const IT = new ITDepartment("i2", ["Wale", "Seun"]);
accounting.addEmployee("Wale");
accounting.addEmployee("Seun");

accounting.printReports();
accounting.printEmployeeInformation();

accounting.addReport("Some reports blah blah...");

accounting.mostRecentReport = "Just adding some report through setter"; //a setter
console.log(accounting.mostRecentReport); //a getter

//ABSTRACT CLASSES: Abstract classes are mainly for inheritance where other classes (sub classes) may derive from them. We cannot create an instance of an abstract class.
//An abstract class typically includes one or more abstract methods or property declarations. The sub class which extends the super abstract class MUST define all the abstract methods of the super class in its own scope.
//private|static modifiers cant be used with abstract fields
