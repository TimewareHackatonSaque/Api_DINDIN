import { Test, TestingModule } from '@nestjs/testing';
import { LoanSimulationController } from './loan-simulation.controller';

describe('LoanSimulationController', () => {
  let controller: LoanSimulationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanSimulationController],
    }).compile();

    controller = module.get<LoanSimulationController>(LoanSimulationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
