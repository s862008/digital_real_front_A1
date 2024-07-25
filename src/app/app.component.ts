import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./view/components/footer/footer.component";
import {HeaderComponent} from "./view/components/header/header.component";

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports:[RouterOutlet,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digital_real_front_A1';
}
