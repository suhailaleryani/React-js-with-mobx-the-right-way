
import CarsStore from './../Cars/stores/CarsStore';
import { decorate, observable } from 'mobx';


class AppStore {


  carsStore = new CarsStore();


}

decorate(AppStore, {
  carsStore: observable
})

export default AppStore;