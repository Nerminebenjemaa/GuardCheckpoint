export class Personne {

  name: string;
  firstname: string;
  cin: number;
  job: string;
  path: string;
  age: number;
  id: number;
 
 

  constructor(
              name: string = '',
              firstname: string = '',
              cin: number = 0,
              job: string = '',
              path: string = '',
              age: number = 0,
              id: number = 0
              
              ) {
    
    this.name = name;
    this.firstname = firstname;
    this.cin = cin;
    this.job = job;
    this.path = path;
    this.age = age;
    this.id = id;
  
  }

}
