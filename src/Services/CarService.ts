import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CreateCarODM from '../Models/CarODM';

class CarService {
  public async createNewCar(car: ICar) {
    const newCarODM = new CreateCarODM();
    const newCar = await newCarODM.createNewCar(car);
    return new Car(newCar);
  }
}

export default CarService;