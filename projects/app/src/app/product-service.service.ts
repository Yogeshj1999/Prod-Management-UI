import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getData():Observable<Product>{
    return this.http.get<Product>("http://localhost:8080/product/1");
  }
  getAllData():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/product");
  }
}
