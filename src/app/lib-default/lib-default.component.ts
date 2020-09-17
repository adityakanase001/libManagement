import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lib-default',
  templateUrl: './lib-default.component.html',
  styleUrls: ['./lib-default.component.css']
})
export class LibDefaultComponent implements OnInit {

  books:any;
  bid: any;
  constructor(public service: DataService)
   {  
    this.Books();
   }

  ngOnInit() {
  }

  Books() {
    this.service.getBooks().subscribe((result)=>{
      console.log(result);
      this.books = result;
    },(error)=>{
      console.log(error)
    }
    )
  }

  delete(no)
  {
    console.log(no);
    const result = confirm("Are you sure want to delete emp with ID : "+no);
    if(result==true){
      this.service.deleteBook(no).subscribe((res)=>{
        console.log(res);
        this.Books();
      },(error)=>{
        console.log(error);
      })
    }
    
 }
}
