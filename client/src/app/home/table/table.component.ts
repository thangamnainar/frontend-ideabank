import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service.service'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  searchQuery: string = '';
  userQuestionUpdate: Subject<string> = new Subject<string>();


  constructor(private service: ServiceService) {
    this.getAllData();

    this.userQuestionUpdate
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value: string) => {
        this.getUserQuestion(value);
      });

  }

  onSearch() {
    this.userQuestionUpdate.next(this.searchQuery);
  }

  getUserQuestion(value: string) {
    if (value) {
      this.service.userQuestion(value).subscribe({
        next: (response) => {
          this.products = response.data;
          console.log(this.products, 'products');
          console.log(response, 'response');
        }, error: (error) => {
          console.log(error);
        }
      });
      console.log('Search query:', value);
    } else {
      this.getAllData();
      console.log('Search query not found');
    }
    // Perform your search logic using the value
  }

  products: any;

  getAllData() {
    this.service.getUsers().subscribe({
      next: (response) => {
        this.products = response.data;
        console.log(response, 'response');
      }, error: (error) => {
        console.log(error);
      }
    })
  }

}

