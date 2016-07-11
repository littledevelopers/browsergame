import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';
import { Map } from './map';

@Component({
    selector: 'map',
    templateUrl: 'app/map/map.component.html'
})

export class MapComponent implements OnInit {

    map: Map[];
    actualShowSize: number;
    sizeOptions: number[];
    

    constructor(
        private mapService: MapService
    ){ }

    ngOnInit() { 
        this.map = this.mapService.getFullMap();
        this.actualShowSize = this.mapService.getActualShowSize();
        this.sizeOptions = this.mapService.getSizeOptions();
    }

}