import { NgModule } from '@angular/core'
import { ProductRepository } from './product.repository'
import { StaticDataSource } from './static.datasource'
import { Cart } from './cart.model'
import { Order } from './order.model'
import { OrderRepository } from './order.repository'
import { RestDataSource } from './rest.datasource'
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth.service'

// make its classes/services available to other modules
@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, 
    { provide: StaticDataSource, useClass: RestDataSource }
    , Cart, Order, OrderRepository,AuthService,RestDataSource],
})
export class ModelModule {}
