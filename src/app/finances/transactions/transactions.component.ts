import { Transaction } from './../models/transaction';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = [
    {_id: "1", date: "24/03/2022", description: "Trade", type: "Entrada", value: 78, account: "Conta inicial", category: "Alimentação"},
    {_id: "2", date: "24/03/2022", description: "Compras", type: "Saida", value: 20, account: "Conta inicial", category: "Alimentação"}
  ];

  displayedColumns = ['date', 'description', 'type', 'value', 'account', 'category']

  constructor() {
  }

  ngOnInit(): void {}
}
