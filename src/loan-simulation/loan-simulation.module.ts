import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from 'src/bank/bank.module';
import { LoanSimulationHistory } from '../loan-simulation-history/loan-simulation-history.entity';
import { LoanSimulationHistoryService } from '../loan-simulation-history/loan-simulation-history.service';
import { User } from '../user/user.entity';
import { LoanSimulationController } from './loan-simulation.controller';
import { LoanSimulationService } from './loan-simulation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoanSimulationHistory, User]), // Importa os repositórios necessários
    BankModule,  // Certificar-se de importar o BankModule
  ],
  providers: [LoanSimulationHistoryService, LoanSimulationService],
  controllers: [LoanSimulationController],
  exports: [LoanSimulationHistoryService], // Exporta o serviço, se necessário em outros módulos
})
export class LoanSimulationModule {}
