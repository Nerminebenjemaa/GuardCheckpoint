import { Component, Input, OnInit } from '@angular/core';
import { HiringService } from 'src/app/services/hiring.service';
import {Personne} from '../../models/Personne';

@Component({
  selector: 'app-hired-cv',
  templateUrl: './hired-cv.component.html',
  styleUrls: ['./hired-cv.component.css']
})
export class HiredCvComponent implements OnInit {
  
  hiredPersonCv: Personne[]=[];
  // @Input() hiredPerson: Personne = new Personne();
  constructor( private hiringService : HiringService) { }

  ngOnInit(): void {
    this.hiredPersonCv= this.hiringService.getHiredPerson();
  }

}
