import { ReportDto } from './dtos/report.dto';
import { User } from './../auth/users/user.entitiy';
import { CreateReportDto } from './dtos/create-report.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../guards/auth.guard';
import { CurrentUser } from '../auth/users/decorators/current-user.decorator';
import { Serialize } from '../interceptors/serialize.interceptor';

@Controller('reports')
export class ReportsController {
constructor(private reportsService: ReportsService){}

     @Post()
     @UseGuards(AuthGuard)
     @Serialize(ReportDto)
     createReport(@Body() body: CreateReportDto, @CurrentUser() user: User){
          return this.reportsService.create(body, user);
     }
}

