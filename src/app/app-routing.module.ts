import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'testmonials', component:TestmonialsComponent},
  {path: 'contacts', component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
