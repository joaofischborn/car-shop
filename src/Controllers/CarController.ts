import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createNewCar() {
    const car: ICar = this.req.body;    
    const newCar = await this.service.createNewCar(car);
    return this.res.status(201).json(newCar);
  }

  public async getCars() {
    const cars = await this.service.getCars();
    return this.res.status(200).json(cars);
  }

  public async getCarById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.getCarById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarById() {
    try {
      const { id } = this.req.params;
      const car: ICar = this.req.body;
      const updatedCar = await this.service.updateCarById(id, car);
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;