import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Dating app';
  invoices: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices() {
    this.http.get('https://localhost:5280/api/invoices').subscribe(response => {
      this.invoices = response;
    }, error => {
      console.log(error);
    })
  }
}
