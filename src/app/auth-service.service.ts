import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user : any;
  baseUrl="http://localhost:9090/trial2/user/";

  constructor(private router:Router,
    public http: HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
   if(this.IsLoggedIn())
   {
     console.log("User Has Logged in");
     return true;
   }
   else
   {
    console.log("User Has not Logged in");
     this.router.navigate(['/login']);
     return false;  
   }
  }

  IsLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       window.sessionStorage.getItem("isActive")=="1")
    {
      // some logic to check if person has logged in
      return true;
    }
    else{
      return false;
    }
  }

  CheckCredentialsWithDB(user)
  {
    //Call Some  Service using Post Method
    console.log(user.email);
    console.log(user.password);
    //  const formData = new FormData();
    //  formData.append("email",email);
    //  formData.append("password",password);

     this.user = this.http.post(this.baseUrl+"check",user)

     console.log(this.user);

     if(this.user != null)
     {
      window.sessionStorage.setItem("isActive", "1");
      //window.sessionStorage.setItem("currentUser", this.user);
      return this.user;
     }
     else{
       return null;
     }
    //to check credentials with DB 
    // if(credentials.UserName == "abc" && credentials.Password == "abc@123")
    // {
    //   window.sessionStorage.setItem("isActive", "1");
    //   return true;
    // }
    // else
    // {
    //   return false;
    // }
  }

  Logout()
  {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/login']);
  }
}
