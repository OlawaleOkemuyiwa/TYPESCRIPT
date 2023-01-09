"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name, year: this.fiscalYear };
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    addAdmin(text) {
        this.admins.push(text);
    }
    printAdmins() {
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no last report data found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "Wale") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
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
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
const IT = new ITDepartment("i2", ["Wale", "Seun"]);
accounting.addEmployee("Wale");
accounting.addEmployee("Seun");
accounting.printReports();
accounting.printEmployeeInformation();
accounting.addReport("Some reports blah blah...");
accounting.mostRecentReport = "Just adding some report through setter";
console.log(accounting.mostRecentReport);
