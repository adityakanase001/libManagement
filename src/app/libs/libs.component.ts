import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-libs',
  templateUrl: './libs.component.html',
  styleUrls: ['./libs.component.css']
})
export class LibsComponent implements OnInit {

  lib : any
  constructor(public service: DataService) { }

  ngOnInit() {
    this.libs();
  }

  libs()
  {
    this.service.getLibs().subscribe((res)=>{
      console.log(res);
      this.lib = res;
    },(error)=>{
      console.log(error);
    }
    )
  }

}
