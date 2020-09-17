import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  userId:any;
  amount:number;
  constructor(private router: Router,
    private service: DataService,
    private route: ActivatedRoute
    ) 
    {
    this.amount=120;
   }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let id= result.get("id");
      console.log(id);
      this.userId = id;
  }
    )}

    takePayment()
    {
      this.service.payMoney(this.userId).subscribe((res)=>{
        console.log(res);

      },(error)=>{
        console.log(error);
      })
    }
}
