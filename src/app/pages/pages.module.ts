import { NgModule } from '@angular/core';
/*PUEDE FUNCIONAR CON ESTO  */
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
