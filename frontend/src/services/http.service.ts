import {Injectable, OnInit} from '@angular/core';
import axios from 'axios';
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError} from "rxjs";
import {ProductComponent} from "../app/product/product.component";
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";

export const customAxios = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  products: Product[] = [];


  constructor(private matSnackbar: MatSnackBar,
              private router: Router) {
    customAxios.interceptors.response.use(
      response => {
        if(response.status==201) {
          this.matSnackbar.open("Great success", undefined, {duration: 2000})
        }
        return response;
      }, rejected => {
        if(rejected.response.status>=400 && rejected.response.status <500) {
          matSnackbar.open(rejected.response.data);
        } else if (rejected.response.status>499) {
          this.matSnackbar.open("Something went wrong", "error", {duration: 3000})
        }
        catchError(rejected);
      }
    );
    customAxios.interceptors.request.use(
      async config => {
        config.headers = {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        return config;
      },
      error => {
        Promise.reject(error)
      });
  }


  async getProducts() {
    const httpResponse = await customAxios.get<Product[]>('product');
    this.products = httpResponse.data;
  }

  async createProduct(dto: { price: number; name: string }) {
    const httpResult = await customAxios.post<Product>('product', dto);
    this.products.push(httpResult.data)
  }

  async deleteProduct(id: any) {
    const httpsResult = await customAxios.delete('product/'+id);
    this.products = this.products.filter(p => p.id != httpsResult.data.id)
  }

  async login(dto: any) {
    customAxios.post<string>('auth/login', dto).then(successResult => {
      localStorage.setItem('token', successResult.data);
      this.router.navigate(['./products'])
    })
  }


  async register(param: { role: string; password: any; email: any }) {
    customAxios.post('auth/register', param).then(successResult => {
      localStorage.setItem('token', successResult.data);
      this.router.navigate(['./products'])
    })
  }
}


interface Product {
  id: number,
  price: number,
  name: string,
  expanded: boolean
}

