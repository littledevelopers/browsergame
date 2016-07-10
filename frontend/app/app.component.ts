import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MapComponent } from './map/map.component';
import { MapService } from './map/map.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['/map']" routerLinkActive="active">Map</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
      MapService
  ]
})

export class AppComponent { 

}
