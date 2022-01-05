import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface cart {
  id: number;
  userId: number;
  date: any;
  products: Array<any>;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserCart();
  }

  getUserCart() {
    this.http
      .get('https://fakestoreapi.com/carts/user/2')
      .subscribe((res: any) => {
        this.cart = res[0].products;
        console.log(this.cart);
      });
  }
}
