import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authentificationService : AuthentificationService, 
    private router : Router) { }

  ngOnInit(): void {
  }

  login(loginFormulaire: NgForm){
    // const email = loginFormulaire.form.controls.email.value;
    // const password = loginFormulaire.form.controls.password.value;
    // console.log('your email is : ' + email + ' and yoru password : ' + password);
    console.log(loginFormulaire.value)
    // console.log(loginFormulaire.value.user)
    this.authentificationService.login(loginFormulaire.value).subscribe(

      // (data) => console.log(data),

      (data) => {
        localStorage.setItem('token', data.id);
       
        this.router.navigate(['cv']);
      },
      (erreur)=> console.log(erreur)
   
 
    );
  

  }

}
