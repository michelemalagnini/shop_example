import { Component, effect, inject, signal } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../model/product.model';
import { CartItem } from '../../model/cart-item.model';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  cartService = inject(CartService);

  // Segnali
  getTotalItemsInCart = signal(0);
  qyEffect = effect(() => {
    console.log('last value : ', this.getTotalItemsInCart());
  });

  // Prodotti
  products: Product[] = [
    {
      id: 1,
      name: 'Tshirt XYZ',
      cost: 50,
      oldCost: 100,
      img: 'https://picsum.photos/id/237/400/300',
      variants: ['red', 'purple', 'cyan'],
    },
    {
      id: 2,
      name: 'Pants ABC',
      cost: 30,
      oldCost: 130,
      img: 'https://picsum.photos/id/238/400/300',
      variants: ['red', 'lightgreen'],
    },
    {
      id: 3,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 4,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 5,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 6,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 7,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 8,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 9,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
    {
      id: 10,
      name: 'Maglione XYZ',
      cost: 20,
      oldCost: 120,
      img: 'https://picsum.photos/id/239/400/300',
      variants: ['yellow', 'orange'],
    },
  ];

  selectedProduct: CartItem | null = null;
  selectedProductSignal = signal<CartItem | null>(null);

  constructor() {}

  selectVariant(product: Product, variant: string) {
    this.selectedProduct = { product, variant };
  }

  addToCart() {
    if (this.selectedProduct) {
      this.cartService.addToCart(this.selectedProduct);
    }
  }
}
