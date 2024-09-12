import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './bank/bank.module';
import { LoanSimulationHistoryModule } from './loan-simulation-history/loan-simulation-history.module';
import { LoanSimulationModule } from './loan-simulation/loan-simulation.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    LoanSimulationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password', 
      database: 'loan_simulation_db',
      autoLoadEntities: true, // Carrega automaticamente todas as entidades
      synchronize: true,  // Sincroniza automaticamente as entidades com o banco
    }),
    LoanSimulationModule,
    LoanSimulationHistoryModule,
    UserModule,
    BankModule,
  ],
})
export class AppModule {}
