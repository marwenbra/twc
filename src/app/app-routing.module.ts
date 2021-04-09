import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';

const routes: Routes = [
  {path:"liste",component:ListeFormationComponent},
  {path:"liste/inscription",component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
