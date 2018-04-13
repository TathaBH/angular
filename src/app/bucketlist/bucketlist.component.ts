import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.scss']
})
export class BucketlistComponent implements OnInit {

  @Input() lifeGoals: any;
  
  constructor() { }

  ngOnInit() {
  }
  
  removeGoals(goalsIndex) {
    this.lifeGoals.splice(goalsIndex,1);
  }

}
