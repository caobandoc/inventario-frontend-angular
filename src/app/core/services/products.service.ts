import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";
import {ProductDto} from "../dto/productDto";

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly url: string = `${apiUrl}/product`;

  constructor(
    private http: HttpClient,
  ) { }

  public getProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(this.url);
  }
}
