import { Test, TestingModule } from '@nestjs/testing';
import { LoanSimulationService } from './loan-simulation.service';

describe('LoanSimulationService', () => {
  let service: LoanSimulationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanSimulationService],
    }).compile();

    service = module.get<LoanSimulationService>(LoanSimulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
