import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string;
  goals = [];
  
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  
  addGoals() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
  
  removeGoals($event, goalsIndex) {
    this.goals.splice(goalsIndex,1);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}
