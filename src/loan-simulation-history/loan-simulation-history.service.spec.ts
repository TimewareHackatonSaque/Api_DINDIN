import { Test, TestingModule } from '@nestjs/testing';
import { LoanSimulationHistoryService } from './loan-simulation-history.service';

describe('LoanSimulationHistoryService', () => {
  let service: LoanSimulationHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanSimulationHistoryService],
    }).compile();

    service = module.get<LoanSimulationHistoryService>(LoanSimulationHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
