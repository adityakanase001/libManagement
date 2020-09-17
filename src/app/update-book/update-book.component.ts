import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: any = {"bid":""};
  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router)
   { 
    console.log("Edit book Component Created...");
   }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let id= result.get("bid");
      console.log(id);

      let observableResult = this.service.getBookById(id);
      console.log(observableResult);
      observableResult.subscribe((result)=>{
        console.log(result);
        this.book=result;
        console.log(this.book);
      })
      
     
    }); 
  }

  OnEdit()
   {
     console.log(this.book);
 
     this.service.updateBook(this.book).subscribe((result)=>{
       console.log("after updating... ");
       console.log(result);
       this.router.navigate(['/home/listofbooks']);
     })
   }

}
