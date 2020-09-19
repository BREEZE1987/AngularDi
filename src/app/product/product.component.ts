import {Component, Injector, OnInit} from '@angular/core';
import {Product, ProductService} from '../share/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService
  ) {

  }

  // private productService: ProductService;
  // constructor(
  //   private injector: Injector
  // ) {
  //   this.productService = this.injector.get(ProductService);
  // }

  ngOnInit(): void {
    this.product = this.productService.getProduct();
  }

}
