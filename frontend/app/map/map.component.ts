import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';

@Component({
    selector: 'map',
    templateUrl: 'app/map/map.component.html'
})

export class MapComponent implements OnInit {

    map: any;

    constructor(
        private mapService: MapService
    ){ }

    ngOnInit() { 
        this.map = this.mapService.getFullMap();
    }

}