import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerbylibrarian',
  templateUrl: './registerbylibrarian.component.html',
  styleUrls: ['./registerbylibrarian.component.css']
})
export class RegisterbylibrarianComponent implements OnInit {

  user : any;
  constructor(public dataService:DataService,public router:Router) { }

  ngOnInit() {
  }

  OnAddCallMe(formdata){
    console.log(formdata.form.value);
    this.user=formdata.form.value;
    
    console.log(this.user);
    this.dataService.AddData(this.user).subscribe((res)=>{
      console.log(res);
      //this.msg="Record added succesfully";
      this.router.navigate(['home']);
    })
  }
}
