import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';
import {Personne} from '../../models/Personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cvs: Personne [] = [];
  // selectedCV!: Personne;

  cv: Array<Personne> = [];

  personne = new Personne();




  constructor( private cvService: CvService, private router: Router) {
  }

  ngOnInit(): void {
    // this.cvs= this.cvService.getListCv();
    // console.log(this.cvs);
    // this.initCvList();

    this.cvService.getPersonne().subscribe(
      (personnes)=> this.cvs = personnes,
      (erreur)=> {
        this.cvs = this.cvService.getListCv();
        alert('fake data');
      }
    );
  }


  // initCvList(): void {
    // const cv1 = new Personne(1, 'Ben Jemaa', 'Nermine', 26, 12345678, 'Student', 'assets/images/img_avatar_woman.png');
    // const cv2 = new Personne(2, 'Safi', 'Amine', 26, 14785236, 'Instructor', 'assets/images/img_avatar_man.png');
    // const cv3 = new Personne(3, 'Go', 'My Code', 99, 56321478, 'School', 'assets/images/gomycode.png');
    // this.cvs.push(cv1);
    // this.cvs.push(cv2);
    // this.cvs.push(cv3);
    // console.log(this.cvs);
  // }


  getCvDetails(cv: Personne): void {
    // const Link=['detail'];
    // this.router.navigate([Link]);
    // // this.selectedCV = cv;
    // console.log(cv);

    this.cvService.clickOnItem(this.personne);

  // addItem(person: Personne) {
  //   this.cvs.push(person);
  }

}
