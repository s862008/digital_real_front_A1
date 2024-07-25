import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./view/pages/home/home.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./view/components/header/header.component";
import {FooterComponent} from "./view/components/footer/footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./dashboard/dashboard.module"



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DashboardModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
