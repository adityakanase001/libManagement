import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  users:any;
  constructor(public service: DataService)
   { 
     this.memberList();
   }

  ngOnInit() {
  }

  memberList()
  {
    this.service.getMembers().subscribe((res)=>{
      console.log(res);
      this.users = res;
    },(error)=>{
      console.log(error);
    })
  }
}
