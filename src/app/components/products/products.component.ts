import { Component, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 public productList:any = [];

  constructor( ) { }

  ngOnInit(): void {

// this.api.getProducts().subscribe(responce => this.productList = responce)

  }

}
