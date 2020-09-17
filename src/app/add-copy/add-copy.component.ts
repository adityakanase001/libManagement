import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-copy',
  templateUrl: './add-copy.component.html',
  styleUrls: ['./add-copy.component.css']
})
export class AddCopyComponent implements OnInit {

  book: any = {"bid":""};
  count: any;
  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router) 
    { }

  ngOnInit() {this.route.paramMap.subscribe((result)=>{
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
 
    //  this.service.addCopies(this.book,this.count).subscribe((result)=>{
    //   console.log("after updating... ");
    //   console.log(result);
    //   this.router.navigate(['/home/listofbooks']);
    // })

    this.service.addCopies(this.book,this.count).subscribe((result)=>{
      console.log("after adding copies .. ");
      console.log(result);
      this.router.navigate(['/home/copies']);
    })
   }

}
