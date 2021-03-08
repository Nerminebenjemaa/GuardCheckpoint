import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Personne } from '../models/Personne';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CvService {


public cvs: Array<Personne> = [];

selectSubjectItem = new Subject<Personne>();
 API_LINK='https://immense-citadel-91115.herokuapp.com/api/personnes';


  constructor( private http: HttpClient , private authentificationService : AuthentificationService) { 
this.cvs.push({id: 1, name:'Ben Jemaa', firstname:'Nermine', age:26, cin:12345678, job:'Student', path:'assets/images/img_avatar_woman.png'});
this.cvs.push({id: 2, name:'Safi', firstname:'Amine', age:26, cin:12345678, job:'Instructor', path:'assets/images/img_avatar_man.png'});
this.cvs.push({id: 3, name:'My Code', firstname:'Go', age:26, cin:12345678, job:'School', path:'assets/images/gomycode.png'});
  }

  //previous
  getListCv(): Personne[] {
    return this.cvs;
  }

//new method with http
  getPersonne():Observable <Personne[]> {
   return this.http.get<Personne[]>(this.API_LINK);

  }

  // getFakePersonById(id: any): Personne {

  //   return this.cvs.find(
  //      (personnes) => personnes.id === +id
  //    );
 
  //  }

  //new method
  getPersonById(id : any): Observable<Personne>{

    const headers = new HttpHeaders().set('Authorization','nermine');
    const params = new HttpParams().set('code_Access','123456');
    return this.http.get<Personne>(this.API_LINK + id, {headers, params});
  }
//previous method
  addFakeCv(cv:Personne){
    this.cvs.push(cv);
  }
//new
  addPersonne(personne :Personne){



    const token = localStorage.getItem('token');
    if(token){
      const headers= new HttpHeaders().set('Authorization', token );
      return this.http.post(this.API_LINK, personne , {headers});
    }

    return this.http.post(this.API_LINK, personne)

  }

//previous
  deleteCv(cv:Personne){
    const index = this.cvs.indexOf(cv);
    if (index >-1){
      this.cvs.splice(index,1);
      alert('this cv is deleted')
    }
  }

  //new 

  deletePersonne(id:number){
    const token = localStorage.getItem('token');
  if(token){
    const headers= new HttpHeaders().set('Authorization', token);
    return this.http.delete(this.API_LINK+'/'+ id, {headers});
  }

  return this.http.delete(this.API_LINK + id)

  }

  clickOnItem(personne : Personne){
    this.selectSubjectItem.next(personne);


  }


  
}
