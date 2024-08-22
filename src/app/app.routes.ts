import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./main/pages/home/home.component";
import {ApartmentComponent} from "./main/pages/apartment/apartment.component";
import {FilterSearchComponent} from "./main/pages/filter-search/filter-search.component";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./main/pages/not-found/not-found.component";
import {RComplexComponent} from "./main/pages/residential-complex/r-complex.component";
import {SearchComponent} from "./main/pages/smart-search/search.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '',
    component: HomeComponent
  },
  {
    path: 'apartment/:id',
    component:ApartmentComponent
  },
  {
    path: 'r-complex/:id',
    component:RComplexComponent
  },
  {
    path: 'filter-search',
    component:FilterSearchComponent
  },
  {
    path: 'smart-search',
    component: SearchComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
