import { provideRouter, RouterConfig }  from '@angular/router';
import { MapComponent } from './map/map.component';

const routes: RouterConfig = [
  {
      path: '',
      redirectTo: '/map',
      pathMatch: 'full'
  },
  {
      path: 'map',
      component: MapComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];