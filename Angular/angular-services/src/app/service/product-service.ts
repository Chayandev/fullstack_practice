import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Product {
  name: string;
  brand: string;
  price: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
    console.log('Product service is initialized');
  }
  getAllProducts() {
    const products: Product[] = [
      { name: 'Watch', brand: 'Petter England', price: 500 },
      { name: 'Mac book Air', brand: 'Apple', price: 75000 },
    ];

    return products;
  }

  getProductList() {
    const url = 'https://dummyjson.com/products';
    return this.httpClient.get(url);
  }
}
