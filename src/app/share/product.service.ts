import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {

  constructor(
    private loggerService: LoggerService
  ) {

  }

  getProduct(): Product {
    this.loggerService.log('getProduct 方法被调用');
    return new Product(1, 'iPhone7', 5899, '最新款 iPhone 手机');
  }

}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {

  }

}
