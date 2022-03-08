import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './components/campus/campus.component';
import { FeaturesComponent } from './components/features/features.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
{path: '', component: InicioComponent},
{path: 'campus', component: CampusComponent},
{path:'features', component: FeaturesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
