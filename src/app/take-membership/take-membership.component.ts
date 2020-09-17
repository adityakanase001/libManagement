import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-take-membership',
  templateUrl: './take-membership.component.html',
  styleUrls: ['./take-membership.component.css']
})
export class TakeMembershipComponent implements OnInit {

  constructor(public service: DataService)
   { 
     this.nonMembers();
   }

  ngOnInit() {
  }

  nonMembers()
  {

  }
}
