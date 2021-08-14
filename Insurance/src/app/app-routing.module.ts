import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclaimComponent } from './addclaim/addclaim.component';
import { AddvehicleclaimComponent } from './addvehicleclaim/addvehicleclaim.component';
import { AdminComponent } from './admin/admin.component';
import { ShowclaimComponent } from './showclaim/showclaim.component';

const routes: Routes = [
  {path:'showclaim',component:ShowclaimComponent},
  {path:'addclaim',component:AddclaimComponent},
  {path:'addvehicleclaim',component:AddvehicleclaimComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
