import { HomePageComponent } from './pages/home/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/saerch-box/search-box.component';
import { CartListComponent } from './components/cart-list/cart-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CartListComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
