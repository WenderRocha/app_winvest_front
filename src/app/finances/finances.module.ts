import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { AccountsComponent } from './accounts/accounts.component';
import { FinancesRoutingModule } from './finances-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AccountsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FinancesRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class FinancesModule { }
