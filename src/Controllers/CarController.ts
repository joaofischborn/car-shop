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
}

export default CarController;