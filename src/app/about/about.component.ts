import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) {
    console.log(this.route.params.subscribe(res => console.log(res.id)));
  }

  ngOnInit() {
  }
  
  toHome() {
    this.router.navigate(['']);
  }
}
