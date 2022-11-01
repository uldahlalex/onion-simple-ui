import {Component, OnInit} from '@angular/core';
import {customAxios, HttpService} from "../services/http.service";
import {Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: string = "";
  constructor(private router: Router,
              public http: HttpService) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  route() {
    this.router.navigate(['./login'])
  }

  switchBetweenLoginAndProducts() {
    if(this.currentRoute=='/login') {
      this.router.navigate(['./products'])
    } else if(this.currentRoute=='/products') {
      this.router.navigate(['./login'])
    }
  }

  logOut() {
    localStorage.setItem('token', '');
    this.router.navigate(['login'])
  }
}
