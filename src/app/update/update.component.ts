import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  no;
  emp;
  image:any;
  constructor(public activeRoute:ActivatedRoute,
              public service:DataService,
              public router:Router
    ) { 

    activeRoute.paramMap.subscribe((params)=>{
      this.no=params.get("no");

      this.service.getDataById(this.no).subscribe((res)=>{

        console.log(res);
        this.emp=res;
        
        console.log(this.emp);

      })


    })

}

onSelectFile(event) {
  this.image = event.target.files[0];
}

update(){
  this.emp.no=this.no;
   this.service.update(this.emp).subscribe((res)=>{
     console.log(res);
     this.router.navigate(['home']);

   })

 }

  ngOnInit() {
  }

}
