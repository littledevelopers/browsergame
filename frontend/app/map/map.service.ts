import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

    constructor() { }

    getFullMap(){
        return [1,2,3,4,5,6,7,8,9];
    }

}