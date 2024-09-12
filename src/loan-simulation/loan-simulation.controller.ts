/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Get, InternalServerErrorException, Query } from '@nestjs/common';
import { LoanSimulationHistoryService } from '../loan-simulation-history/loan-simulation-history.service';
import { LoanSimulationService } from './loan-simulation.service';

@Controller('loans')
export class LoanSimulationController {
  constructor(
    private readonly loanSimulationService: LoanSimulationService,
    private readonly historyService: LoanSimulationHistoryService,
  ) {}

  @Get('simulate')
  async calculateInstallments(
    @Query('userId') userId: number,
    @Query('loanAmount') loanAmount: number,
    @Query('numberOfInstallments') numberOfInstallments: number,
  ): Promise<any[]> {
    try {
      // Chama o serviço para calcular as parcelas para todos os bancos
      const options = await this.loanSimulationService.calculateInstallmentsForAllBanks(
        loanAmount,
        numberOfInstallments,
      );

      // Salva no histórico de simulações do usuário
      // Passa o CET do primeiro banco ou ajuste conforme necessário
      await this.historyService.saveLoanSimulationHistory(
        userId,
        loanAmount,
        options[0]?.annualCET || 0, // Certifique-se de que sempre há um valor
        numberOfInstallments,
      );

      // Retorna as opções de empréstimo
      return options;
    } catch (error) {
      console.error('Erro ao calcular simulação:', error); // Log detalhado do erro
      throw new InternalServerErrorException('Erro ao calcular a simulação.');
    }
  }
}