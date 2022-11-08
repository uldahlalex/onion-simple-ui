import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{

  constructor(public http: HttpService) {}

  productName: string = "";
  productPrice: number = 0;
  searchTerm: string = "";


  toggleExpand(product: any) {
    product.expanded = !product.expanded;
  }
}
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
      return items.filter(item => {
        if (item) {
          return (item["name"].toLowerCase().includes(searchText));
        }
        return false;
      });

  }
}
