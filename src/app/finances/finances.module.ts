import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AccountsComponent } from './accounts/accounts.component';
import { FinancesRoutingModule } from './finances-routing.module';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  declarations: [
    AccountsComponent,
    HomeComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    FinancesRoutingModule,
    FlexLayoutModule,
    AppMaterialModule
  ]
})
export class FinancesModule { }
