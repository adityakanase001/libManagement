import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  book : any ={"title":""};

  constructor(public service:DataService,
              public router:Router)
  { }

  ngOnInit() {

  
  }


  AddBook()
  {

    
    console.log(this.book);
    this.service.addBook(this.book).subscribe((res:any)=>{
      console.log(res);
      if(res.title == "Validation Error")
      {
        const res = confirm("Invalid Insertion. Please Try Again");
        if(res==true)
        this.router.navigate(['/addBook'])
      }
      else
      {
        
        const res = confirm("Book Added Successfully");
        if(res==true)
        this.router.navigate(['/home'])
      }
      //this.msg="Record added succesfully";
      //this.router.navigate(['/book']);
    })
    //alert("In Add");
  }
}
