import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service.service'

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnInit{

    gender: any;
    cities: any;

  constructor(private service: ServiceService) { }

  formFields = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gender: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    selectedCity: new FormControl('', [Validators.required]),
    });

  ngOnInit(): void {
    this.service.getGender().subscribe({
      next: (response) => {
        this.gender = response.data;
        console.log(response.data, 'response');
        
      }, error: (error) => {
        console.log(error);        
      }
    })

    this.service.getDistrict().subscribe({
      next: (response) => {
        this.cities = response.data;
        console.log(response.data, 'response');        
      },error: (error) => {
        console.log(error);
      }
    })

    }

  getData(){
    console.log(this.formFields.value);
    
  }

 
  
  
}
