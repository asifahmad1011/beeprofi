import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public homeP = false;
  public servicesP = false;
  public projectsP = false;
  public aboutusP = false;
  public signupP = false;

  constructor() { 
  }

  ngOnInit(): void {
    // this.homeP = false;
    // this.servicesP = false;
    // this.projectsP = false;
    // this.aboutusP = false;
    // this.signupP = false;
  }

  homePage(){
    this.homeP = true;
    this.servicesP = false;
    this.projectsP = false;
    this.aboutusP = false;
    this.signupP = false;
    console.log("function called...")
  }

  servicesPage(){
    this.homeP = false;
    this.servicesP = true;
    this.projectsP = false;
    this.aboutusP = false;
    this.signupP = false;
    console.log("function called...")
  }
  projectsPage(){
    this.homeP = false;
    this.servicesP = false;
    this.projectsP = true;
    this.aboutusP = false;
    this.signupP = false;
    console.log("function called...")
  }
  aboutusPage(){
    this.homeP = false;
    this.servicesP = false;
    this.projectsP = false;
    this.aboutusP = true;
    this.signupP = false;
    console.log("function called...")
  }
  signupPage(){
    this.homeP = false;
    this.servicesP = false;
    this.projectsP = false;
    this.aboutusP = false;
    this.signupP = true;
    console.log("function called...")
  }

}
