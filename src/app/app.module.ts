import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {AnotherProductComponent} from './another-product/another-product.component';
import {ProductService} from './share/product.service';
import {LoggerService} from './share/logger.service';
import {AnotherProductService} from './share/another-product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AnotherProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ProductService,
      useFactory: (loggerService: LoggerService, isDev: boolean) => {
        if (isDev) {
          return new ProductService(loggerService);
        } else {
          return new AnotherProductService(loggerService);
        }
      },
      deps: [LoggerService, 'IS_DEV_ENV']
    },
    {
      provide: 'IS_DEV_ENV', useValue: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
