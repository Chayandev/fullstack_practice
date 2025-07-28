import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product, ProductService } from './service/product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports:[CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products!:Product[];
  productList:any;
  constructor(private productService:ProductService){}
  ngOnInit(){
    this.getAllProducts()
  }
  getAllProducts(){
    this.products=this.productService.getAllProducts()
  }

  getProductList(){
     this.productService.getProductList().subscribe((data:any)=>{
      console.log(data);
        this.productList=data.products
     });
     
  }
}
