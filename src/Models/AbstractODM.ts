import { Model, Schema, model, models, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  private schema: Schema<T>;
  private model: Model<T>;
  private modelName: string;

  constructor(schema: Schema<T>, modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(object: T): Promise<T> {
    return this.model.create({ ...object });
  }

  public async findAll() {
    return this.model.find({});
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async update(_id: string, object: Partial<T>) {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...object } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default AbstractODM;