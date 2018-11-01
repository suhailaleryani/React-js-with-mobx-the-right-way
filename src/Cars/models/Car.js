/**
 * Car.js
 * Example Class that has all it's properties decorated as observable
 * You could use  @observable instead of decorate function
 */

import { decorate, observable } from 'mobx';

class Car {

    color = null;
    price = null;
    capacity = null;
    numberOfSeat = null;

    constructor(payload = null) {
        if (payload && Object.keys(payload).length > 0) { // here we check if no payload we create null properties instead
            this.color = payload.color;
            this.price = payload.price;
            this.capacity = payload.capacity;
            this.numberOfSeat = payload.numberOfSeat;
        }
    }
}

decorate(Car, {
    color: observable,
    price: observable,
    capacity: observable,
    numberOfSeat: observable,
});

export default Car;