import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MOdulos
import { AppRputingModule } from './app-rputing/app-rputing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRputingModule,
    RouterModule,
    PagesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
