import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { authGuard } from './core/auth/auth.guard';

const routes: Routes = [
   {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'paginas',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
    canActivate: [ authGuard ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth-pages/auth-pages.module').then(m => m.AuthPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
