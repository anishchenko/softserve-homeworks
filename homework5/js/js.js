/*1. */
function propsCount(currentObject) {
  let count = 0;
  for(key in currentObject) {
     count++;
  }
  return count;
}

let mentor = {
  course: 'JS foundamentals',
  duration: 3,
  direction: 'web-devepment',
}

console.log(propsCount(mentor));

/*2. */

let numbers = {
  100: 'one',
  200: 'two',
  300: 'three',
  400: 'four',
  500: 'five',
};

function showProps(obj) {
  let props = [];
  let vals = [];
  for(key in obj) {
    props.push(key);    //add all props obj in array
    vals.push(obj[key]);  //add all vals obj in array
  }
  return {  //return obj with 2 props(array) 
    prop: props,
    val: vals,
  };
}
let res = showProps(numbers);
console.log('Props obj "numbers": ' + res.prop);
console.log('Vals obj "numbers": ' + res.val);

/*3. */
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends Person {
  constructor(name, surname, course) {
    super(name, surname);
    this.course = course;
  }
  showFullName(midleName) {
    this.midleName = midleName;
    return this.name + ' ' + this.surname + ' ' + midleName;
  }
  showCourse(course) {
    const currentYear = new Date();
    let currentCourse = (currentYear.getFullYear() - this.course) + 1;
    try {
      if(isNaN(currentCourse)) {
        throw new Error('the course number must be a number');
      }
      if(this.course == currentYear.getFullYear()) {
        return "Current course: 1";
      }
      if(this.course > currentYear.getFullYear()) {
        throw new Error('wrong year of admission to the university');
      }
    }
    catch(err) {
      return err.message;
    }
    
    return "Current course: " + currentCourse;
  };
}

const stud1 = new Student('petro', 'petrenko', 2015);
console.log(stud1.showFullName('perodsaftuyg'));
console.log(stud1.showCourse());

/*4. */
class Worker {
  static _experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  calcSalary() {
    const salary = this.dayRate * this.workingDays;
    return salary;
  }
  showSalary() {
    console.log(this.fullName + ' salary ' + this.calcSalary());
  }

  calcSalaryWithExp() {
    const salaryWithExp = this.calcSalary() * Worker._experience;
    return salaryWithExp;
  }
  showSalaryWithExperience() {
    console.log(this.fullName + ' salary with exp ' + this.calcSalaryWithExp());
  }

  get showExp(){
    return Worker._experience;
  }
  set newExp(val) {
    Worker._experience = val;
  }


}

let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

console.log(worker1.fullName);
worker1.showSalary();
console.log('new expirience: ' + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.newExp = 1.5;
console.log('new expirience: ' + worker1.showExp);
worker1.showSalaryWithExperience();
worker2.showSalaryWithExperience();
worker3.showSalaryWithExperience();


