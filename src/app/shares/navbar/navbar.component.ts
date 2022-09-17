import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title:string = "GMP";
  courseName: string = "Angular";
  changeNameWithThis(course:string){
    this.courseName = course;
  }
  constructor() { }
  changeName() {
    this.courseName = "typeScript";
  }
  
  ngOnInit(): void {
    
  }
  

}
