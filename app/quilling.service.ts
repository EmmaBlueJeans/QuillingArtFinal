import { Injectable, NgZone } from '@angular/core';
import * as data from './data.json';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCart } from './top-menu/ShoppingCart';
import { ShoppingCartProduct } from "./shopping-cart";

@Injectable({
  providedIn: 'root'
})
export class QuillingService {
  categories = [
    'Animal', 'Baby', 'Birthday', 'Congratulation', 'Graduation',
    'Holidays', 'Nature', 'Scenery', 'Thank you'
  ];

  products: Product[] = (data as any).default;
  private filteredProductsSubject = new BehaviorSubject<Product[]>([]);
  filteredProducts$ = this.filteredProductsSubject.asObservable();
  shoppingCart: ShoppingCart = new ShoppingCart();
  total: number = 0;
  totalPriceBeforeDiscount: number = 0;
  discount: number = 0;
  coupon: number = 0;

  constructor(private zone: NgZone) {
    // Initialize with all products
    this.filteredProductsSubject.next(this.products);
  }

  shuffleArray = (array: Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getFeaturedProducts(count: number = 4): Product[] {
    return this.shuffleArray([...this.products]).slice(0, count);
  }

  addProduct(product: Product): void {
    const productId = product._id;
    const cartProduct = this.shoppingCart.products.get(productId);

    if (cartProduct) {
      cartProduct.count++;
    } else {
      this.shoppingCart.products.set(productId, new ShoppingCartProduct(product, 1));
    }
    this.updateTotal();
    console.log('Product added:', product);
    console.log('Current cart:', Array.from(this.shoppingCart.products.values()));
  }

  updateTotal(): void {
    this.totalPriceBeforeDiscount = Array.from(this.shoppingCart.products.values()).reduce((acc, cartProduct) => acc + cartProduct.product.price * cartProduct.count, 0);
    this.total = this.totalPriceBeforeDiscount - this.discount;
  }

  removeProduct(product: Product): void {
    const productId = product._id;
    const cartProduct = this.shoppingCart.products.get(productId);

    if (cartProduct) {
      if (cartProduct.count > 1) {
        cartProduct.count--;
      } else {
        this.shoppingCart.products.delete(productId);
      }
      this.updateTotal();
      console.log('Product removed:', product);
      console.log('Current cart:', Array.from(this.shoppingCart.products.values()));
    }
  }

  getNewCount(product: Product): number {
    const cartProduct = this.shoppingCart.products.get(product._id);
    return cartProduct ? cartProduct.count : 0;
  }

  removeAllProducts = (id: string) => {
    this.shoppingCart.products.delete(id);
    this.updateTotal();
    console.log('All products with ID', id, 'removed from cart');
    console.log('Current cart:', Array.from(this.shoppingCart.products.values()));
  }

  getTotalCost = (): number => {
    return this.total;
  }

  getProductsByCategory(category?: string): Product[] {
    if (category) {
      return this.products.filter(product => product.category === category);
    }
    return this.products;
  }

  setFilteredProducts(searchVal: string): void {
    const filtered = this.products.filter((product: Product) =>
        product.name.toLowerCase().includes(searchVal.toLowerCase()));
    this.filteredProductsSubject.next(filtered);
  }

  resetFilteredProducts(): void {
    this.filteredProductsSubject.next(this.products);
  }

  setFilteredProductsByCategory(category: string): void {
    const filtered = this.getProductsByCategory(category);
    this.filteredProductsSubject.next(filtered);
  }

  applyCoupon(code: string): void {
    if (code) {
      this.zone.run(() => {
        this.discount = 1; // Apply $1 discount for any coupon code
        this.coupon = 1;
        this.updateTotal();
        console.log('Total cost after applying coupon:', this.getTotalCost());
      });
    }
  }

  payNow(): void {
    const products = Array.from(this.shoppingCart.products.values());
    const total = this.total;
    const discount = this.discount.toFixed(2);

    let productDetails = '';
    products.forEach(wrapper => {
      productDetails += `${wrapper.product.name}: $${wrapper.product.price}\n`;
    });

    const message = `Thank you for your purchase!\n\nProducts Bought:\n${productDetails}\n\nDiscount Applied: -$${discount}\nTotal: $${total}`;
    alert(message);
  }
}
