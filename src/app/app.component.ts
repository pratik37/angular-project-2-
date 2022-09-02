import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number = 0;
  isVisible : boolean = false;
  password: string = "Bahubali@123";
  log: string = "";
  counter: number[] = [];

  showhidepassword(){
  this.isVisible = !this.isVisible;
  // this.count = this.count +1;
  // this.log = this.log + " " + this.count + ' , ';
  this.counter.push(this.count +1);
  this.count = this.count +1;
  }
}
