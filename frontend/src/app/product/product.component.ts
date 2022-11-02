import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  constructor(public http: HttpService) {}

  productName: string = "";
  productPrice: number = 0;


  toggleExpand(product: any) {
    product.expanded = !product.expanded;
  }

  ngOnInit(): void {
    this.http.getProducts();
  }

}
