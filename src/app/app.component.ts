import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StorygallaryComponent } from './components/storygallary/storygallary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    StorygallaryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weeding-web';
  constructor(private router:Router){

  // this.router.events.subscribe((event) => {
  //   if (event instanceof NavigationEnd) {
  //     const url = event.url;
  //     if (url === '/') {
  //       document.body.classList.add('home-route');
  //     } else {
  //       document.body.classList.remove('home-route');
  //     }
  //   }
  // });
}
}
