import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.scss']
})
export class BucketlistComponent implements OnInit {

  @Input() lifeGoals: any;
  @Output('dG') deleteGoal = new EventEmitter<number>();
  counter: number;
  
  constructor() { }

  ngOnInit() {
  }
  
  removeGoals(goalsIndex) {
    this.lifeGoals.splice(goalsIndex,1);
    this.counter = this.lifeGoals.length;
    this.deleteGoal.emit(this.counter);
  }
  
}
