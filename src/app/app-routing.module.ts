import { ProgramacoesComponent } from './programacoes/programacoes.component';
import { OradoresComponent } from './oradores/oradores.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { EsbocosComponent } from './esbocos/esbocos.component';
import { CongregacoesComponent } from './congregacoes/congregacoes.component';
import { CanticosComponent } from './canticos/canticos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'canticos', component: CanticosComponent },
  { path: 'congregacoes', component: CongregacoesComponent },
  { path: 'esbocos', component: EsbocosComponent },
  { path: 'idiomas', component: IdiomasComponent },
  { path: 'oradores', component: OradoresComponent },
  { path: 'programacoes', component: ProgramacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
