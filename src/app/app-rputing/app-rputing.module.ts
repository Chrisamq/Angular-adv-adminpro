import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*MODULOS*/
import { PagesRoutingModule } from '../pages/pages.routing';
import { AuthRoutingModule } from '../auth/auth.routing';


import { NopagefoundComponent } from '../nopagefound/nopagefound.component';

const routes: Routes = [

  //path: '/dashboard' PagesRouting
  //path: '/auth' AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})

export class AppRputingModule { }
