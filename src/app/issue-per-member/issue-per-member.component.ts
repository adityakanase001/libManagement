import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-issue-per-member',
  templateUrl: './issue-per-member.component.html',
  styleUrls: ['./issue-per-member.component.css']
})
export class IssuePerMemberComponent implements OnInit {

  issues:any;
  id:number;
  user:any;
  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router) { 
    
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.id = this.user.id;
    this.issueList();
  }

  issueList()
  {
    this.service.isssueListPerMember(this.user.id).subscribe((res)=>{
      console.log(res);
      this.issues = res;
    },(error)=>{
      console.log(error);
    })
  }

}
