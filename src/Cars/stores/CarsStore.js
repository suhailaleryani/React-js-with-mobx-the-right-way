/**
 * CarsStore.js
 * Example for mobx store
 */

import { decorate, observable, action } from 'mobx';
import CarsCollection from './../models/CarsCollection';
import CarsService from './../services/CarsService';

class CarsStore {


  collection = new CarsCollection();
  service = new CarsService();

  getCars = () => {
    return this.service.getCars()
      .then((results) => {
        this.collection.build(results);
        console.log(results);
        return this.collection;
      })
      .catch((error) => {
        console.log(error);
      })


  }

  addCar(car) {
    return this.collection.addCar(car);
  }

}

decorate(CarsStore, {
  collection: observable,
  addCar: action
})

export default CarsStore;