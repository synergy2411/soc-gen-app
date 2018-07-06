import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
id : number;
name : string;

  constructor(private route : ActivatedRoute) {
    // this.id = +this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.queryParams['name'];
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
    });
    this.route.queryParams.subscribe(queryParams=>{
      this.name = queryParams['name'];
    })
   }

  ngOnInit() {
  }

}
