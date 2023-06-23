import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { IdeabankHomeComponent } from './ideabank-home/ideabank-home.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';

const routes: Routes = [
  {
    path:'',component:IdeabankHomeComponent,
    children:[
      {
        path:'table',component:TableComponent
      },
      {
        path:'add-form',component:AddEmployeeFormComponent
      },
      {
        path:'form-fields',component:FormFieldsComponent
      }
    ]
  },
  {
    path:'addForm',component:AddEmployeeFormComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
