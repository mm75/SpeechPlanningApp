import { ProgramacoesComponent } from './presentation/pages/programacoes/programacoes.component';
import { OradoresComponent } from './presentation/pages/oradores/oradores.component';
import { IdiomasComponent } from './presentation/pages/idiomas/idiomas.component';
import { EsbocosComponent } from './presentation/pages/esbocos/esbocos.component';
import { CongregacoesComponent } from './presentation/pages/congregacoes/congregacoes.component';
import { CanticosComponent } from './presentation/pages/canticos/canticos.component';
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
