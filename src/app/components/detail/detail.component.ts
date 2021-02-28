import {Component, Input, OnInit} from '@angular/core';
import { CvService } from 'src/app/services/cv.service';
import { HiringService } from 'src/app/services/hiring.service';
import {Personne} from '../../models/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {



  @Input() retreivedCV: Personne = new Personne();

  constructor(private hiringService : HiringService,
    private cvService : CvService) { }

  ngOnInit(): void {
    this.cvService.selectSubjectItem.subscribe(
      (personne) => { this.retreivedCV= personne}
    );
  
  }


  getHiredCV(cv: Personne): void {
    this.hiringService.hiring(this.retreivedCV);

  }
  

  DeleteCV(cv: Personne): void{

    this.cvService.deleteCv(this.retreivedCV)

  }



}
