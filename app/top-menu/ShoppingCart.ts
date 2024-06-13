import { Product } from "../product";
import { ShoppingCartProduct } from "../shopping-cart";

export class ShoppingCart {
    products: Map<string, ShoppingCartProduct> = new Map();

    constructor() {
    }

    addProduct = (product: Product) => {
        if (product === undefined) return;
        if (this.products.has(product._id)) { 
            this.products.get(product._id)!.count +=1;
        }
        else { this.products.set(product._id, new ShoppingCartProduct(product, 1)); }
    }

    removeProduct = (id:string) => {
        if (!this.products.has(id)) return;
        const prod: ShoppingCartProduct | undefined = this.products.get(id);
        if (prod!.count > 1) prod!.count -= 1;
        else this.products.delete(id);
    }

    removeAllProduct = (id: string) => { this.products.delete(id); }
}