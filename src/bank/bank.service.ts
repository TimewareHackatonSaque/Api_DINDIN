import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from './bank.entity';
import { BankRepository } from './bank.repository';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private bankRepository: BankRepository,
  ) {}

  async getAllBanks(): Promise<Bank[]> {
    return this.bankRepository.findAll();
  }
}
