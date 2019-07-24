import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdenesComponent } from './ordenes/ordenes.component';


const routes: Routes = [
  { path: "", component: ClientesComponent},
  { path: "clientes", component: ClientesComponent},
  { path: "ordenes", component: OrdenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
