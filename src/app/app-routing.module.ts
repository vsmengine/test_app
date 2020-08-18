import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockdataComponent } from './components/mockdata/mockdata.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


const routes: Routes = [
  {path: '', component: MockdataComponent},
  {path: 'products', redirectTo: ''},
  {path: 'wishlist', component: WishlistComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
