import { HomeComponent } from './presentation/pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './presentation/shared/components/nav/nav.component';
import { CanticosComponent } from './presentation/pages/canticos/canticos.component';
import { CongregacoesComponent } from './presentation/pages/congregacoes/congregacoes.component';
import { EsbocosComponent } from './presentation/pages/esbocos/esbocos.component';
import { IdiomasComponent } from './presentation/pages/idiomas/idiomas.component';
import { OradoresComponent } from './presentation/pages/oradores/oradores.component';
import { ProgramacoesComponent } from './presentation/pages/programacoes/programacoes.component';
import { ConfirmationDialogComponent } from './presentation/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './presentation/shared/services/confirmation-dialog.service';
import { AutocompleteComponent } from './presentation/shared/components/autocomplete/autocomplete.component';
import { AuthenticateService } from './infra/authentication/authenticate.service';
import { InterceptorService } from './infra/interceptors/interceptor.service';
import { environment } from 'src/environments/environment';
import { StorageService } from './presentation/shared/services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CanticosComponent,
    CongregacoesComponent,
    EsbocosComponent,
    IdiomasComponent,
    OradoresComponent,
    ProgramacoesComponent,
    ConfirmationDialogComponent,
    AutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot(),
    AuthModule.forRoot({
      domain: environment.oauth0.domain,
      clientId: environment.oauth0.clientId,
      audience: environment.oauth0.audience,
    }),
  ],
  providers: [
    AuthenticateService,
    ConfirmationDialogService,
    StorageService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
