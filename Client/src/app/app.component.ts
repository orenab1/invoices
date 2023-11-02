import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Invoice Interview';
  newInvoice: any;
  invoices: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getInvoices();
    this.newInvoice = {
      Client: '',
      Created: '',
      Due: '',
      Sum: null,
      Status: '',
    };
  }

  getInvoices() {
    this.http.get('https://localhost:5280/api/invoices').subscribe(
      (response) => {
        this.invoices = response;
      },
      (error) => {
        this.invoices = [
          {
            Id: 1,
            Client: 'Client A',
            Created: '2023-11-02T12:12:23Z',
            Due: '2023-12-02T12:12:23Z',
            Sum: 100.0,
            Status: 1,
          },
          {
            Id: 2,
            Client: 'Client B',
            Created: '2023-11-02T12:12:23Z',
            Due: '2023-12-17T12:12:23Z',
            Sum: 200.0,
            Status: 2,
          },
          {
            Id: 3,
            Client: 'Client C',
            Created: '2023-11-02T12:12:23Z',
            Due: '2024-01-01T12:12:23Z',
            Sum: 300.0,
            Status: 3,
          },
        ];

        console.log(error);
      }
    );
  }

  onSubmit(formValue: any) {
    const endpoint = 'http://localhost:5280/api/createinvoice';
    this.http.post(endpoint, this.newInvoice).subscribe({
      next: (response) => {
        this.resetForm();
        this.closeModal();
      },
      error: (error) => {
        console.error(error);
        // TO DO: better error handling
      },
    });
  }

  resetForm() {
    this.newInvoice = {
      Client: '',
      Created: '',
      Due: '',
      Sum: null,
      Status: '',
    };
  }

  closeModal() {
    // TO DO: close the modal 
  }
}
