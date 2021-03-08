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

//   login(username: string, password: string) {
//     return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
//         .pipe(map(user => {
//             // login successful if there's a jwt token in the response
//             if (user && user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('currentUser', JSON.stringify(user));
//                 this.currentUserSubject.next(user);
//             }

//             return user;
//         }));
// }
}
