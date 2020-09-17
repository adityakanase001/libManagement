import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  lib : any
  constructor(public service: DataService) { }

  ngOnInit() {
    this.libs();
  }

  libs()
  {
    this.service.getAdmins().subscribe((res)=>{
      console.log(res);
      this.lib = res;
    },(error)=>{
      console.log(error);
    }
    )
  }

}
