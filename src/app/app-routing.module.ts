import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './pages/paises/paises.component';
import { PaisComponent } from './pages/pais/pais.component';

const app_routes: Routes = [
  { path: '', component: PaisesComponent },
  { path: 'pais/:id', component: PaisComponent },
  { path: '**', component: PaisesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
