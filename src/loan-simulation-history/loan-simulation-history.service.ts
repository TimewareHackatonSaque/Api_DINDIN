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
    annualCET: number,
    numberOfInstallments: number,
  ) {
    const history = this.loanSimulationHistoryRepository.create({
      loanAmount,
      annualCET,
      numberOfInstallments,
      user: { id: userId },
    });
    return this.loanSimulationHistoryRepository.save(history);
  }

  async getSimulationDetails(userId: number) {
    try {
      if (isNaN(userId)) {
        throw new Error('ID do usuário inválido.');
      }

      const history = await this.loanSimulationHistoryRepository.find({
        where: { user: { id: userId } },
        select: ['loanAmount', 'annualCET', 'numberOfInstallments'],
      });

      if (!history || history.length === 0) {
        throw new Error('Nenhuma simulação encontrada para este usuário.');
      }

      return history;
    } catch (error) {
      console.error('Erro ao buscar detalhes de simulação:', error.message);
      throw new Error('Erro ao buscar detalhes de simulação.');
    }
  }
}
