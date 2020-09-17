import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  msg: any;
  user:any;
  email ="";
  password = "";
  pwd:any;
  newpassword = "";
  constructor(private service: DataService,
    private router: Router) 
    { }

  ngOnInit() 
  {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.email = this.user.email;
  }

  changePwd()
  {

    if(this.user.password == this.password)
    {
      console.log(this.email);
      console.log(this.password);
      console.log(this.newpassword);

      this.user.password = this.newpassword;
      this.service.changePwd(this.user.id,this.user).subscribe((res)=>{
        console.log(res);

            if(res.title == "Validation Error")
            {
              const res = confirm("Invalid Password. Please Try Again");
              if(res==true)
              this.router.navigate(['/home/changePassword'])
            }
            else
            {
              
              const res = confirm("Password Changed Succesfully Successfully");
              if(res==true)
              this.router.navigate(['/home'])
            }
        this.router.navigate(['/home']);
      })
    }
    else{
      const res = confirm("Invalid Password. Please Try Again");
              if(res==true)
              this.router.navigate(['/home/changePassword']);
    }
 
    //  this.service.updateBook(this.book).subscribe((result)=>{
    //    console.log("after updating... ");
    //    console.log(result);
    //    this.router.navigate(['/home/listofbooks']);
  }
}
