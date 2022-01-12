import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'create' , component: FormCreateComponent},
  {path: 'edit/:id/:name/:cell' , component: FormEditComponent},
  {path: '**' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
