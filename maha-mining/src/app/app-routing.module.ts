import { TestComponent } from './products/test/test.component';
import { ProductsComponent } from './products/products.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//nested routing
const routes: Routes = [
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductsComponent,

    children: [
      { path: 'tv', component: TvComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'laptop', component: LaptopComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
