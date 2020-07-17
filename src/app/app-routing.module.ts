import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsProductComponent } from './product/details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ProdutcListComponent} from './product/produtc-list/produtc-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos',component: ProdutcListComponent},
  {path: 'product/:id', component: DetailsProductComponent},
  {path: '**', component: NotFoundComponent}
];
//HomePage
//404
//DetailsProduct

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
