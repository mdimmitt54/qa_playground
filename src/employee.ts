/*** Employee is a class to hold employee records***/

class Employee {
id: number;
name: string;
phone: string;
email: string;

constructor(id: number, name: string, phone: string, email: string){
  this.id = id;
  this.name = name;
  this.phone = phone;
  this.email = email;
}

// returns the string we want for an employee record
toString(): string {
    let output =
      `Employee Record --- ID: ${this.id}\n` +
      `Name: ${this.name}\n` +
      `Contact Information\n` +
      `\tPhone: ${this.phone}\n` +
      `\tEmail: ${this.email}\n`;
    return output;
  }
}

let firstEmployee = new Employee(
    54,
    "Nick Fury",
    "8015551234",
    "nfury@shield.com"
  );
  console.log(firstEmployee.toString());












