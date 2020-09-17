import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-member-to-issue',
  templateUrl: './member-to-issue.component.html',
  styleUrls: ['./member-to-issue.component.css']
})
export class MemberToIssueComponent implements OnInit {

  userId:number;
  user:any;
  book:any;
  books:any;
  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router) 
    { }

  ngOnInit() {

    this.route.paramMap.subscribe((result)=>{
      let id= result.get("id");
      console.log(id);

      
      this.service.getBooks().subscribe((result)=>{
        console.log(result);
        this.books = result;

              let observableResult2 = this.service.getDataById(id);
              console.log(observableResult2);
              observableResult2.subscribe((result)=>{
                console.log(result);
                this.user=result;
                console.log(this.user);
                this.userId = this.user.id;
              })
      },(error)=>{
        console.log(error)
      }
      )

    }); 
  }

  issueBook(bid)
  {

    let observableResult1 = this.service.getBookById(bid);
                        console.log(observableResult1);
                        observableResult1.subscribe((result)=>{
                          console.log(result);
                          this.book=result;
                          console.log(this.book);


                          if(this.user.fine > 0)
                          {
                            const res = confirm("Sorry ..User has Pending Fine .. plz ask to pay fine !!!");
                            if(res==true)
                            this.router.navigate(['/home/issue']);
                          }
                          else if(this.user.countOfIssues > 3)
                          {
                            const res = confirm("Sorry ..User has already reached the limt of issuing Books !!!");
                            if(res==true)
                            this.router.navigate(['/home/issue']);
                          }
                          else if(this.book.noOfCopies == 0)
                          {
                            const res = confirm("Sorry .. This Book is not Avaible Right now!!! ");
                            if(res==true)
                            this.router.navigate(['/home/issue']);
                          }
                          else
                          {
                            this.service.issueBook(this.userId,bid).subscribe((res)=>{
                              console.log(res);
                              this.router.navigate(['/home/issue']);
                            },(error)=>{
                              console.log(error);
                            })
                          }
                        })

  }
}
