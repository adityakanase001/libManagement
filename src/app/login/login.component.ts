import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  user : any = {email : '', password : ''};
  u : any;
  constructor(
    private router: Router,
    private service: AuthServiceService,
    private emtService: EmitterService) { }

  ngOnInit() {
  }

  SignIn() {
  
    if (this.user.email.length == 0) {
      alert('enter email');
    } else if (this.user.password.length ==0) {
      alert('enter password');
    } else {

      //this.user = this.service.CheckCredentialsWithDB(this.email,this.password);

      this.service.CheckCredentialsWithDB(this.user).subscribe((result)=>{
        console.log(result);
        this.user = result;

        console.log(this.user);

      if(this.user.role=='ADMIN')
      {
          sessionStorage['login_status'] = '1';
          sessionStorage.setItem('role',this.user.role);
          sessionStorage.setItem('user',JSON.stringify(this.user));
          localStorage.setItem('flag','true');
          this.router.navigate(['/home']);
      }
      else if(this.user.role=='LIBRARIAN')
      {
          sessionStorage['login_status'] = '1';
          sessionStorage.setItem('role',this.user.role);
          sessionStorage.setItem('user',JSON.stringify(this.user));
          localStorage.setItem('flag','true');
          this.emtService.navBarSwitch(true);
          this.router.navigate(['/home']);
      }
      else if(this.user.role=='MEMBER')
      {
          sessionStorage['login_status'] = '1';
          sessionStorage.setItem('role',this.user.role);
          sessionStorage.setItem('user',JSON.stringify(this.user));
          localStorage.setItem('flag','true');
          this.emtService.navBarSwitch(true);
          this.router.navigate(['/home']);
      }else{
        alert("invalid login");
        this.router.navigate(['']);
      }


      },(error)=>{
        console.log(error)
      }
      )

      
      
    }
}
}
