import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module'; // Importar UserModule
import { LoanSimulationHistoryController } from './loan-simulation-history.controller';
import { LoanSimulationHistory } from './loan-simulation-history.entity';
import { LoanSimulationHistoryService } from './loan-simulation-history.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoanSimulationHistory]),
    UserModule, // Importar UserModule
  ],
  providers: [LoanSimulationHistoryService],
  controllers: [LoanSimulationHistoryController],
})
export class LoanSimulationHistoryModule {}
