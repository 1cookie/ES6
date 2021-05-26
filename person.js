class Human {
  
  gender = 'female';
  
  printGender = () => {
    console.log(this.gender);
  }
}


class Person extends Human {
  
  name = 'Roger';
  gender = 'male';
  
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
