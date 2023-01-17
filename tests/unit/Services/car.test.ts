import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

describe('Testes Service', function () {
  it('Verifica se é possível cadastrar um carro', async function () {
    const newCar: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const car: Car = new Car(newCar);

    sinon.stub(Model, 'create').resolves(car);
    const service = new CarService();
    const result = await service.createNewCar(newCar);

    expect(result).to.be.deep.equal(car);
  });

  it('Verifica se é possível encontrar um carro pelo id', async function () {
    const car: ICar = {
      id: '63c70c441605277bbf0e48eb',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findOne').resolves(car);
  
    const service = new CarService();
    const result = await service.getCarById('63c70c441605277bbf0e48eb');
  
    expect(result).to.be.deep.equal(car);
  });

  it('Verifica se é possível listar todos os carros', async function () {
    const cars = [
      {
        id: '63776ded12654d2053a32382',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63776ded12654d2053a32384',
        model: 'Celta',
        year: 2010,
        color: 'Black',
        status: true,
        buyValue: 20.990,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];
    sinon.stub(Model, 'find').resolves(cars);

    const service = new CarService();
    const result = await service.getCars();

    expect(result).to.be.deep.equal(cars);
  });

  afterEach(function () {
    sinon.restore();
  });
});