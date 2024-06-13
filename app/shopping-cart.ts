import { Product } from "./product";

export class ShoppingCartProduct {
    product: Product;
    count: number;

    constructor(prod: Product, count: number) {
        this.product = prod;
        this.count = count;
    }
}
export class ShoppingCart {
    products: ShoppingCartProduct[] = [];
}