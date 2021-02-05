import { HomeComponent } from './presentation/pages/home/home.component';
import { ProgramacoesComponent } from './presentation/pages/programacoes/programacoes.component';
import { OradoresComponent } from './presentation/pages/oradores/oradores.component';
import { IdiomasComponent } from './presentation/pages/idiomas/idiomas.component';
import { EsbocosComponent } from './presentation/pages/esbocos/esbocos.component';
import { CongregacoesComponent } from './presentation/pages/congregacoes/congregacoes.component';
import { CanticosComponent } from './presentation/pages/canticos/canticos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateService as Auth } from './infra/authentication/authenticate.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    canActivate: [Auth],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'canticos', component: CanticosComponent },
      { path: 'congregacoes', component: CongregacoesComponent },
      { path: 'esbocos', component: EsbocosComponent },
      { path: 'idiomas', component: IdiomasComponent },
      { path: 'oradores', component: OradoresComponent },
      { path: 'programacoes', component: ProgramacoesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
