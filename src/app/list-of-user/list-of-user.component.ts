import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-of-user',
  templateUrl: './list-of-user.component.html',
  styleUrls: ['./list-of-user.component.css']
})
export class ListOfUserComponent implements OnInit {

  members: any;
  nonmembers: any;
  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router)
     { }

  ngOnInit() {
    this.service.getMembers().subscribe((res)=>{
      console.log(res);
      this.members = res;

            this.service.getNonMembers().subscribe((res)=>{
              console.log(res);
              this.nonmembers = res;
            },(error)=>{
              console.log(error);
            })
    },(error)=>{
      console.log(error)
    })
  }

}
