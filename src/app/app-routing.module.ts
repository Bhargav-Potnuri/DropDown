import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { signinGuard } from './guards/signin.guard';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'signup', component: SigninComponent, canActivate: [authGuard] },
  {
    path: 'account',
    component: AccountInfoComponent,
    canActivate: [signinGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
