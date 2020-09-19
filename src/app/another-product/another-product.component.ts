import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../share/product.service';
import {AnotherProductService} from '../share/another-product.service';

@Component({
  selector: 'app-another-product',
  templateUrl: './another-product.component.html',
  styleUrls: ['./another-product.component.less'],
  // providers: [{ provide: ProductService, useClass: AnotherProductService }]
})
export class AnotherProductComponent implements OnInit {

  anotherProduct: Product;

  constructor(
    private anotherProductServiceService: ProductService
  ) {

  }

  ngOnInit(): void {
    this.anotherProduct = this.anotherProductServiceService.getProduct();
  }

}
