import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancesRoutingModule } from './finances-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AccountsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FinancesRoutingModule
  ]
})
export class FinancesModule { }
