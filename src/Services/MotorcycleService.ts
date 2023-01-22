import MotorcycleODM from '../Models/MotorcycleODM';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';

class MotorcycleService {
  public motorcycleODM: MotorcycleODM;
  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }
  public async createNewMotorcycle(moto: IMotorcycle) {
    const newMotorcycle = await this.motorcycleODM.create(moto);
    return new Motorcycle(newMotorcycle);
  }
}

export default MotorcycleService;