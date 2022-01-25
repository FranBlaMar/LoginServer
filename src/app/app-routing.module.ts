import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
  {    
    path: '',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },
  {    
    path: 'protected',
    loadChildren: () => import('./protected/protected.module')
    .then(m => m.ProtectedModule)
  },
  { path: '**', redirectTo: ''}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]})

export class AppRoutingModule { } 