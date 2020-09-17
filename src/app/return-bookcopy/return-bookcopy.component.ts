import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-return-bookcopy',
  templateUrl: './return-bookcopy.component.html',
  styleUrls: ['./return-bookcopy.component.css']
})
export class ReturnBookcopyComponent implements OnInit {

  issues:any;
  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router) { 
    this.issueList();
  }

  ngOnInit() {
  }

  issueList()
  {
    this.service.getIssuedList().subscribe((res)=>{
      console.log(res);
      this.issues = res;
    },(error)=>{
      console.log(error);
    })
  }

  returnBook(iid)
  {
    this.service.returnBook(iid).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/home/issue']);
    },(error)=>{
      console.log(error);
    })
  }
}
