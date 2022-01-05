import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getPost();
  }
  getPost() {
    this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
      this.products = res;
    });
  }
}
