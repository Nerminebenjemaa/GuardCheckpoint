import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {


public cvs: Array<Personne> = [];

selectSubjectItem = new Subject<Personne>();
 API_LINK='https://immense-citadel-91115.herokuapp.com/api/personnes/';


  constructor( private http: HttpClient) { 
this.cvs.push({id: 1, name:'Ben Jemaa', firstName:'Nermine', age:26, cin:12345678, job:'Student', path:'assets/images/img_avatar_woman.png'});
this.cvs.push({id: 2, name:'Safi', firstName:'Amine', age:26, cin:12345678, job:'Instructor', path:'assets/images/img_avatar_man.png'});
this.cvs.push({id: 3, name:'My Code', firstName:'Go', age:26, cin:12345678, job:'School', path:'assets/images/gomycode.png'});
  }

  getListCv(): Personne[] {
    return this.cvs;
  }


  getPersonne():Observable <Personne[]> {
   return this.http.get<Personne[]>(this.API_LINK);

  }

  // getPersonById(id): Personne{

  //   return this.cvs.find(
  //      (personnes) => personnes.id ===+id
  //    );
 
  //  }

  getPersonById(id): Observable<Personne>{
    return this.http.get<Personne>(this.API_LINK + id);
  }

  addCv(cv:Personne){
    this.cvs.push(cv);
  }


  deleteCv(cv:Personne){
    const index = this.cvs.indexOf(cv);
    if (index >-1){
      this.cvs.splice(index,1);
      alert('this cv is deleted')
    }


    
  }

  clickOnItem(personne : Personne){
    this.selectSubjectItem.next(personne);


  }


  
}
