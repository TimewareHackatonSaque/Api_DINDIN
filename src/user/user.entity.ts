import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LoanSimulationHistory } from '../loan-simulation-history/loan-simulation-history.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() // Gera o ID automaticamente
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  senha: string;
  
  @OneToMany(() => LoanSimulationHistory, (history) => history.user)
  loanSimulationHistories: LoanSimulationHistory[];
}
