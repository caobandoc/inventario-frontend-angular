import {Routes} from '@angular/router';
import {HomeComponent} from "./feature/home/pages/home/home.component";
import {AdminComponent} from "./feature/admin/pages/admin/admin.component";
import {homeGuard} from "./core/guards/home.guard";
import {authGuard} from "./core/guards/auth.guard";
import {ProductsComponent} from "./feature/admin/components/products/products.component";
import {ShoppingcartComponent} from "./feature/admin/components/shoppingcart/shoppingcart.component";

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [homeGuard]
}, {
  path: 'admin',
  component: AdminComponent,
  canActivate: [authGuard],
  children: [{
      path: 'products',
      component: ProductsComponent,
    }, {
      path: 'shopping-cart',
      component: ShoppingcartComponent,
    }, {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
  }]
}
];
