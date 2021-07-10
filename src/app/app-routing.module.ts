import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosesComponent } from './themes/roses';
import { SunflowerComponent } from './themes/sunflower';

const routes: Routes = [{ path: 'roses', component: RosesComponent }, { path: 'sunflower', component: SunflowerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
