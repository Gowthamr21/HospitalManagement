import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  canExit () : boolean{
    if(confirm("you are about to leave your page. press 'yes' to continue")){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit() {
  }

}
