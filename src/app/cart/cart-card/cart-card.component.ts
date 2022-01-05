import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() productId: any = '';
  @Input() quantity: any = '';
  product: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProduct(this.productId);
  }
  getProduct(id: any) {
    this.http
      .get('https://fakestoreapi.com/products/' + id)
      .subscribe((res) => {
        this.product = res;
        console.log(this.product);
      });
  }
}
