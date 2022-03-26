import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AccountsComponent } from './accounts/accounts.component';
import { FinancesRoutingModule } from './finances-routing.module';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BarComponent } from './components/chart/bar/bar.component';


@NgModule({
  declarations: [
    AccountsComponent,
    HomeComponent,
    TransactionsComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    FinancesRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    NgApexchartsModule
  ]
})
export class FinancesModule { }
