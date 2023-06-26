import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IdeabankHomeComponent } from './ideabank-home/ideabank-home.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    IdeabankHomeComponent,
    TableComponent,
    AddEmployeeFormComponent,
    FormFieldsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RadioButtonModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule
  ]
})
export class HomeModule { }
