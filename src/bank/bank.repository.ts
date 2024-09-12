import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bank } from './bank.entity';

@Injectable()
export class BankRepository {
  constructor(
    @InjectRepository(Bank)
    private readonly repository: Repository<Bank>,  // Repositório injetado
  ) {}

  // Defina aqui os métodos personalizados para trabalhar com bancos, se necessário
  findAll() {
    return this.repository.find();
  }
}
