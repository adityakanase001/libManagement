import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user :any;
  constructor(private service: DataService,
              private router: Router) { }

  ngOnInit() {
    this.user=JSON.parse(sessionStorage['user']);
    console.log(this.user);
  }

  OnUpdateCallMe()
  {
    console.log(this.user);
    this.service.update(this.user).subscribe((result)=>{
      console.log("after updating..");
      console.log(result);
      this.router.navigate(['home']);
    })
  }
}
