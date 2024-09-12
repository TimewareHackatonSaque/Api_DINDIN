import { Controller, Get, Param } from '@nestjs/common';
import { LoanSimulationHistoryService } from './loan-simulation-history.service';

@Controller('historico')
export class LoanSimulationHistoryController {
  constructor(
    private readonly loanSimulationHistoryService: LoanSimulationHistoryService,
  ) {}

  @Get('/user/:userId')
  async getSimulationDetails(@Param('userId') userId: number) {
    return this.loanSimulationHistoryService.getSimulationDetails(userId);
  }
}
