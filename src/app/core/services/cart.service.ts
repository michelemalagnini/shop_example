import { Injectable } from '@angular/core';
import { CartItem } from '../../model/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  addToCart(cartItem: CartItem) {
    if (cartItem) {
      this.items = [...this.items, cartItem];
    }
  }

  getTotalCart() {
    return this.items.reduce((acc: number, curr: CartItem) => {
      return acc + curr.product.cost;
    }, 0);
  }
}
