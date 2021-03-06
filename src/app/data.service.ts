import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
  
  private goals = new BehaviorSubject<any>(['My first life goal', 'My second life goal']);
  goal = this.goals.asObservable();
  
  constructor() { }
  
}
