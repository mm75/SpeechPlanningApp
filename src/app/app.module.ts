import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CanticosComponent } from './canticos/canticos.component';
import { CongregacoesComponent } from './congregacoes/congregacoes.component';
import { EsbocosComponent } from './esbocos/esbocos.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { OradoresComponent } from './oradores/oradores.component';
import { ProgramacoesComponent } from './programacoes/programacoes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CanticosComponent,
    CongregacoesComponent,
    EsbocosComponent,
    IdiomasComponent,
    OradoresComponent,
    ProgramacoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
