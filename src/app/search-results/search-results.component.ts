import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  word:any;
  books:any;
  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=>{
      this.word = res.get("word");
      console.log(this.word);

      this.service.searchbyName(this.word).subscribe((res)=>{
        console.log(res);
        this.books=res;
      },(error)=>{
        console.log(error);
      })
    })
  }

}
