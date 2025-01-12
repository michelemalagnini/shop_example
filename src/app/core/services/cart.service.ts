import { Injectable } from '@angular/core';
import { CartItem } from '../../app.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  addToCart(cartitem: CartItem) {
    if (cartitem) {
      this.items = [...this.items, cartitem];
    }
  }
  getTotalCart() {
    return this.items.reduce((acc: number, curr: CartItem) => {
      return acc + curr.product.cost;
    }, 0);
  }
}
