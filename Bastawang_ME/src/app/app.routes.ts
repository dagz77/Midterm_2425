import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'abt', component:AboutComponent},
  {path: 'svcs', component:ServicesComponent},
  {path: 'cntc', component:ContactComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
