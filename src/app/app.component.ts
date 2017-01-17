import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  w3_open(){
    document.getElementById("mySidenav").style.display = "block";
  }
  w3_close(){
    document.getElementById("mySidenav").style.display = "none";
  }
}
