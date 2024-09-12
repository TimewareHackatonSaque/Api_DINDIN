import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from './bank.entity';
import { BankRepository } from './bank.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Bank])], // Registrar a entidade Bank
  providers: [BankRepository],  // Adicionar o repositório como provider
  exports: [BankRepository], // Exportar para outros módulos que precisam usá-lo
})
export class BankModule {}
