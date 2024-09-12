import { Test, TestingModule } from '@nestjs/testing';
import { LoanSimulationHistoryController } from './loan-simulation-history.controller';

describe('LoanSimulationHistoryController', () => {
  let controller: LoanSimulationHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanSimulationHistoryController],
    }).compile();

    controller = module.get<LoanSimulationHistoryController>(LoanSimulationHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
