import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  constructor(private router:ActivatedRoute){
    
    
  }
  ngOnInit(): void {
    alert(this.router.snapshot.params["id"]);
  }

}
