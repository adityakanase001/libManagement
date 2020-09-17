import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  role:any;  
  user:any;
  word:any;

  flag:boolean=false;
  constructor(public service:DataService, private router: Router, private emservice:EmitterService) { 
    this.flag=localStorage['flag'];
    console.log("aaaaaa"+this.flag);
  }

  navBarSwitch(){
    
    if(this.role==undefined)
    {
      this.flag=false;
    }
  }

  ngOnInit() {
    this.role=sessionStorage['role'];
    console.log('role: ', this.role);
   
    this.user=JSON.parse(sessionStorage['user']);
    console.log("user details");
    console.log(this.user);
    this.emservice.getEmittedValueForNavSwitch()
    .subscribe(item => this.flag=item);
  }

  onSearch(word)
  {
    console.log(word);
    console.log(this.word);
    this.router.navigate(['/home/searchresults/'+this.word]);
  }
}
