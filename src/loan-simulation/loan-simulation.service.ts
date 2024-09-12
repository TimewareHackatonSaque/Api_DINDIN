import { Injectable } from '@nestjs/common';
import { BankRepository } from '../bank/bank.repository';

@Injectable()
export class LoanSimulationService {
  constructor(
    private readonly bankRepository: BankRepository,
  ) {}

  async calculateInstallmentsForAllBanks(loanAmount: number, numberOfInstallments: number) {
    // Buscar todos os bancos cadastrados no sistema
    const banks = await this.bankRepository.findAll();

    console.log('Bancos encontrados:', banks);

    const loanOffers = [];

    // Gerar as ofertas para cada banco
    for (const bank of banks) {
      const annualCET = bank.annualCET;

      // Calcular o valor da parcela (usando uma fórmula simplificada)
      const installment = this.calculateInstallment(loanAmount, annualCET, numberOfInstallments);

      loanOffers.push({
        bankName: bank.name,
        annualCET: bank.annualCET,
        installment,
        numberOfInstallments,
        loanAmount,
      });
    }

    return loanOffers;
  }

  private calculateInstallment(loanAmount: number, annualCET: number, numberOfInstallments: number) {
    const monthlyRate = annualCET / 12 / 100;
    const installment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfInstallments)) / (Math.pow(1 + monthlyRate, numberOfInstallments) - 1);
    return installment;
  }
}
