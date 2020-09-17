import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  nonmembers : any
  constructor(public service: DataService) { }

  ngOnInit() {
    this.nonMembers();
  }

  nonMembers()
  {
    this.service.getNonMembers().subscribe((res)=>{
      console.log(res);
      this.nonmembers = res;
    },(error)=>{
      console.log(error);
    }
    )
  }

  addmembership(id)
  {

  }
}
