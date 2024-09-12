import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanSimulationHistory } from './loan-simulation-history.entity';

@Injectable()
export class LoanSimulationHistoryService {
  constructor(
    @InjectRepository(LoanSimulationHistory)
    private readonly loanSimulationHistoryRepository: Repository<LoanSimulationHistory>,
  ) {}

  async saveLoanSimulationHistory(
    userId: number,
    loanAmount: number,
    annualCET: number, // Inclua annualCET aqui
    numberOfInstallments: number,
  ) {
    const history = this.loanSimulationHistoryRepository.create({
      loanAmount,
      annualCET,
      numberOfInstallments,
      user: { id: userId }, // Associe com o usuário
    });
    return this.loanSimulationHistoryRepository.save(history);
  }
}
