import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsContainerComponent } from './modules/math-facts/pages/facts-container/facts-container.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:FactsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
