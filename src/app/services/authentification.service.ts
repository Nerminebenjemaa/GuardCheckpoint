import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  API_AUTH_LINK='https://immense-citadel-91115.herokuapp.com/api/Users/login';

  constructor( private http: HttpClient) { }


  isAuthentificated(){
    return !!localStorage.getItem('token');
  }


  login(credantials : any){
   return this.http.post<any>(this.API_AUTH_LINK, credantials);

  }
  logOut(){
    localStorage.removeItem('token');
  }
}
