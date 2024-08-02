import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./view/pages/home/home.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./view/components/header/header.component";
import {FooterComponent} from "./view/components/footer/footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./features/dashboard/dashboard.module"
import {ContainerComponent} from "./view/components/container/container.component";
import {AdminModule} from "./features/admin/admin.module";
import {PersonalModule} from "./features/personal-profile/personal.module";
import {BusinessModule} from "./features/business-profile/business.module";
import {PricePipe} from "./view/pipes/price.pipe";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PricePipe,
    ContainerComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DashboardModule,
    AdminModule,
    PersonalModule,
    BusinessModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
