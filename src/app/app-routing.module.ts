import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { AgregarClientesComponent } from './componentes/agregar-clientes/agregar-clientes.component';

const routes: Routes = [
  {path: '', component:TableroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrarse', component:RegistroComponent},
  {path: 'configuracion', component:ConfiguracionComponent},
  {path: 'cliente/editar/:id', component:EditarClientesComponent},
  {path: 'cliente/agregar', component:AgregarClientesComponent},
  {path: '**', component:NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
