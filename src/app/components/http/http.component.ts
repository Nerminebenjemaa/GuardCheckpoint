import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
 //form get method  API_LINK='https://jsonplaceholder.typicode.com/users'

 API_LINK='https://jsonplaceholder.typicode.com/posts'
 

  constructor( private http : HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.API_LINK).subscribe(

      (datas) => console.log(datas),
      (erreurs) => console.log(erreurs)
    )
  }


  postApi(){
    const newPost ={
      id: 101,
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    this.http.post(this.API_LINK, newPost ).subscribe(
      (response) => console.log(response)
    )
  }

}
