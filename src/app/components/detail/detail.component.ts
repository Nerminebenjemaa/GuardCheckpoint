import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';
import { HiringService } from 'src/app/services/hiring.service';
import {Personne} from '../../models/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  
  LINK=['cv'];
  
  retreivedCV: Personne = new Personne();

  constructor(private hiringService : HiringService,
    private cvService : CvService,
    private activatedRroute : ActivatedRoute,
    private router : Router ) { }
    
  ngOnInit(): void {
    this.cvService.selectSubjectItem.subscribe(
      (personne) => { this.retreivedCV= personne}
    );
 
    this.activatedRroute.params.subscribe(
      (params)=>{
        // this.personne = this.cvService.getPersonById(params.id);

        // if(!this.personne){
        //   this.router.navigate(Link);


       this.cvService.getPersonById(params.id).subscribe(
          (personne) => this.retreivedCV= personne,
          (erreur) => this.router.navigate(this.LINK)

          );

      }
      
    
    );
  
  }


  getHiredCV(cv: Personne): void {
    this.hiringService.hiring(this.retreivedCV);

  }
  

  DeleteCV(cv: Personne): void{

    this.cvService.deleteCv(this.retreivedCV)

  }


  DeletePersonne(id :number): void{
    console.log(this.retreivedCV.id);

    this.cvService.deletePersonne(this.retreivedCV.id).subscribe(
      
      (success)=>{
       
        console.log(success)
        const Link=["list"];
        this.router.navigate(Link);
      },
      // (erreur)=> console.log(erreur)
    );



  }



}
