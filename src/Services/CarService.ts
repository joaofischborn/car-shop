import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

class CarService {
  public carODM: CarODM;
  constructor() {
    this.carODM = new CarODM();
  }
  public async createNewCar(car: ICar) {
    const newCar = await this.carODM.create(car);
    return new Car(newCar);
  }

  public async getCars() {
    const allCars = await this.carODM.findAll();
    return allCars.map((car: ICar) => new Car(car));
  }

  public async getCarById(id: string) {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    const car = await this.carODM.findById(id);
    if (!car) throw new Error('Car not found');
    return new Car(car);
  }

  public async updateCarById(id: string, car: ICar) {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    const updateCar = await this.carODM.update(id, car);
    if (!updateCar) throw new Error('Car not found');
    return new Car(updateCar);
  }
}

export default CarService;