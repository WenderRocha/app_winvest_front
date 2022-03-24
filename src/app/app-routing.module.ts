import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //{path: '', pathMatch: 'full', redirectTo: 'home'},

  { path: 'financeiro',
    loadChildren: () => import('./finances/finances.module').then(m => m.FinancesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
