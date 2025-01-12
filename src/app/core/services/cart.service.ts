import { Injectable } from '@angular/core';

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

export interface Product {
  id: number;
  name: string;
  cost: number;
  oldCost: number;
  img: string;
  variants: string[];
}

export interface CartItem {
  product: Product;
  variant: string;
}
