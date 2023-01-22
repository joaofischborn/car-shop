import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).createNewCar());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getCars());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCarById());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCarById());
routes.post('/motorcycles', (req, res, next) => 
  new MotorcycleController(req, res, next).createNewMotorcycle());

export default routes;
