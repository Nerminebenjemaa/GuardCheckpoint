import { Injectable } from '@angular/core';
import { CvService } from './cv.service';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class HiringService {

  public hiredPersons: Array<Personne> = [];

  constructor() { }

  getHiredPerson(): Personne[]{
    return this.hiredPersons;

  }

  hiring(Person : Personne){
    const index = this.hiredPersons.indexOf(Person);
    if (index===-1){
      this.hiredPersons.push(Person);
      alert('this person is hired! check hire cv list')

    }
    else{
      alert('this person is selected previously')
    }
  }

}
