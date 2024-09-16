import {Component} from '@angular/core';
import {ProductsService} from "../../../../core/services/products.service";
import {ProductDto} from "../../../../core/dto/productDto";
import {CurrencyPipe} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: ProductDto[] = [];

  constructor(
    private productsService: ProductsService,
    private modalService: NgbModal
  ) {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(productId: number) {
    console.log('Deleting product', productId);
  }

  updateProduct(product: ProductDto) {
    const modalRef = this.modalService.open(ProductComponent);
    modalRef.componentInstance.product = product;
  }

}
