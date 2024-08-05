import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./main/pages/home/home.component";
import {ApartmentComponent} from "./main/pages/apartment/apartment.component";
import {FilterSearchComponent} from "./main/pages/filter-search/filter-search.component";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./main/pages/not-found/not-found.component";

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
  {path: 'apartment',
    component:ApartmentComponent
  },
  {
    path: 'filter-search',
    component:FilterSearchComponent
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
