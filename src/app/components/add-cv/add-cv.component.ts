import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';
import {Personne} from '../../models/Personne';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  cvs: Personne [] = [];
  addedCV!: Personne;
  cv: Array<Personne> = [];

  // @Output() addItemEvent = new EventEmitter<Personne>();
  
  
  

  constructor( private cvService: CvService , private router: Router) { }

  ngOnInit(): void {
  }
  // add(person :Personne){
  //   // const id= this.cvs[this.cvs.length - 1].id;
  //   // person.id=id + 1;
  //   const Link=["list"];
  //   // console.log(addFormulaire)
  //   this.cvService.addCv(this.addedCV);
  //   // this.addItemEvent.emit(this.addedCV);
 
    
  //   this.router.navigate(Link);
    
  // }


  addPersonne(person: Personne){
   
   
    
    this.cvService.addPersonne(person).subscribe(
      (success)=>{
        console.log(success)
        const Link=['cv'];
        this.router.navigate(Link);
        
      }
    );


  }
}
