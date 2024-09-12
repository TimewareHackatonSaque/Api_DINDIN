import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity'; // Ajuste o caminho para a entidade User

@Entity('loan_simulation_histories')
export class LoanSimulationHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  loanAmount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  annualCET: number;

  @Column()
  numberOfInstallments: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, user => user.loanSimulationHistories, { nullable: true })
  @JoinColumn({ name: 'userId' })
  user: User;
}
