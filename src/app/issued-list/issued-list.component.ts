import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-issued-list',
  templateUrl: './issued-list.component.html',
  styleUrls: ['./issued-list.component.css']
})
export class IssuedListComponent implements OnInit {

  issues:any;
  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router) { 
    this.issueList();
  }

  ngOnInit() {
  }

  issueList()
  {
    this.service.getIssuedList().subscribe((res)=>{
      console.log(res);
      this.issues = res;
    },(error)=>{
      console.log(error);
    })
  }

}
