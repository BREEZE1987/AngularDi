import {Injectable} from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherProductService extends ProductService {

  constructor(
    loggerService: LoggerService
  ) {
    super(loggerService);
  }

  getProduct(): Product {
    return new Product(2, 'SamSung7', 4899, '最新款的三星手机');
  }

}
