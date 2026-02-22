import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // imports: BrowserModule
})
export class ProductComponent {
  name: string = 'new name';
  productType?: Product ;
  isName: boolean = true;
  products?: Product[];

  constructor(private service: ProductServiceService) {}

  toggle() {
    this.service.getData().subscribe({
      next: (data:Product) => {
        this.isName = !this.isName;
        console.log(data);
        this.productType = data;

      },
      error: (error) => {
        console.log('Error :', error);
      }
      // ,
      // compelete: () => {
      //   console.log('Completed the process');
      // },
    });
  }

  getList(){
    this.service.getAllData().subscribe({
      next: (data:Product[]) => {
        this.isName = !this.isName;
        console.log(data);
        this.products = data;
        console.log(data,this.products);
      },
      error: (error) => {
        console.log('Error :', error);
      }
      // ,
      // compelete: () => {
      //   console.log('Completed the process');
      // },
    });
  }
}
