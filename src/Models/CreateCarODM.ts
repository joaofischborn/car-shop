import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';
  
class CreateCarODM {
  private schema: Schema;
  private model: Model<ICar>;
  
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }
  
  public async createNewCar(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getCars() {
    return this.model.find({});
  }

  public async getCarById(id: string) {
    return this.model.findById(id);
  }

  public async updateCarById(_id: string, car: ICar) {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...car },
      { new: true },
    );
  }
}

export default CreateCarODM;