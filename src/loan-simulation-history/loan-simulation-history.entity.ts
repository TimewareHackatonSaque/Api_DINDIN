import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('loan_simulation_histories') // Nome da tabela, opcional
export class LoanSimulationHistory {
  @PrimaryGeneratedColumn() // Gera o ID automaticamente
  id: number;

  @Column('decimal', { precision: 10, scale: 2 }) // Valor do empréstimo com precisão
  loanAmount: number;

  @Column('decimal', { precision: 5, scale: 2 }) // CET anual com precisão
  annualCET: number;

  @Column() // Número de parcelas
  numberOfInstallments: number;

  @CreateDateColumn() // Data de criação automática
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.loanSimulationHistories) // Relacionamento muitos-para-um com User
  user: User;
}
