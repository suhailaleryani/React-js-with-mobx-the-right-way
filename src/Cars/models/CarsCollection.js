
import Car from './Car';
import { decorate, action, computed, observable } from 'mobx';

class CarsCollection {

  cars = [];

  get toArray() {
    return this.cars.slice();
  }

  get length() {
    return this.toArray.length;
  }

  getNewItem(payload = null) {
    return new Car(payload); // create items only in one place
  }

  build(payloads) {
    this.cars.replace(payloads.map((car) => {
      return this.getNewItem(car);
    }))
  }

  addCar(car) {
    if (car instanceof Car) {
      this.cars.push(car);
    } else {
      this.cars.push(this.getNewItem(car));
    }
    return this;
  }

}
decorate(CarsCollection, {
  cars: observable,
  toArray: computed,
  length: computed,
  addCar: action,
  build: action
})
export default CarsCollection;