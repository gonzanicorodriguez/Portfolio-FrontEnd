import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoARGPROGComponent } from './components/logo-arg-prog/logo-arg-prog.component';
import { RedesComponent } from './components/redes/redes.component';
import { PortadaComponent } from './components/portada/portada.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoARGPROGComponent,
    RedesComponent,
    PortadaComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
