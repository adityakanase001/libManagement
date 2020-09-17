import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : any ;
  
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
    //alert("In Add");
  }
}
