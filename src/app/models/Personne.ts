export class Personne {
  id: number;
  name: string;
  firstName: string;
  age: number;
  cin: number;
  job: string;
  path: string;

  constructor(id: number = 0,
              name: string = '',
              firstName: string = '',
              age: number = 0,
              cin: number = 0,
              job: string = '',
              path: string = '') {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
  }

}
