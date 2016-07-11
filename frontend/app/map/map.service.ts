import { Injectable } from '@angular/core';

import { Map } from './map';

@Injectable()
export class MapService {

    MOCK_SHOW_SIZE = 6;
    MOCK_SIZE_OPTIONS = [3,6];

    constructor() { }

    getFullMap(): Map[]{
        return [{"id":1,"coordX":0,"coordY":0,"testType":1},{"id":2,"coordX":1,"coordY":0,"testType":1},{"id":3,"coordX":2,"coordY":0,"testType":2},{"id":4,"coordX":0,"coordY":1,"testType":2},{"id":5,"coordX":1,"coordY":1,"testType":3},{"id":6,"coordX":2,"coordY":1,"testType":3},{"id":7,"coordX":0,"coordY":2,"testType":1},{"id":8,"coordX":1,"coordY":2,"testType":1},{"id":9,"coordX":2,"coordY":2,"testType":2},{"id":10,"coordX":0,"coordY":-1,"testType":1},{"id":11,"coordX":1,"coordY":-1,"testType":1},{"id":12,"coordX":2,"coordY":-1,"testType":2},{"id":13,"coordX":0,"coordY":-2,"testType":2},{"id":14,"coordX":1,"coordY":-2,"testType":3},{"id":15,"coordX":2,"coordY":-2,"testType":3},{"id":16,"coordX":0,"coordY":-3,"testType":1},{"id":17,"coordX":1,"coordY":-3,"testType":1},{"id":18,"coordX":2,"coordY":-3,"testType":2},{"id":19,"coordX":-1,"coordY":-1,"testType":1},{"id":20,"coordX":-2,"coordY":-1,"testType":1},{"id":21,"coordX":-3,"coordY":-1,"testType":2},{"id":22,"coordX":-1,"coordY":-2,"testType":2},{"id":23,"coordX":-2,"coordY":-2,"testType":3},{"id":24,"coordX":-3,"coordY":-2,"testType":3},{"id":25,"coordX":-1,"coordY":-3,"testType":1},{"id":26,"coordX":-2,"coordY":-3,"testType":1},{"id":27,"coordX":-3,"coordY":-3,"testType":2},{"id":28,"coordX":-1,"coordY":0,"testType":1},{"id":29,"coordX":-2,"coordY":0,"testType":1},{"id":30,"coordX":-3,"coordY":0,"testType":2},{"id":31,"coordX":-1,"coordY":1,"testType":1},{"id":32,"coordX":-2,"coordY":1,"testType":1},{"id":33,"coordX":-3,"coordY":1,"testType":2},{"id":34,"coordX":-1,"coordY":2,"testType":1},{"id":35,"coordX":-2,"coordY":2,"testType":1},{"id":36,"coordX":-3,"coordY":2,"testType":2}]
    }

    getActualShowSize(): number{
        return this.MOCK_SHOW_SIZE;
    }

    getSizeOptions(): number[]{
        return this.MOCK_SIZE_OPTIONS;
    }

}