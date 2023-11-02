import { Pipe, PipeTransform } from '@angular/core';

// Assuming InvoiceStatuses is an enum with numeric values
enum InvoiceStatuses {
  PAID = 1,
  UNPAID = 2,
  PENDING = 3,
}

@Pipe({
  name: 'statusDisplay'
})
export class StatusDisplayPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case InvoiceStatuses.PAID:
        return 'Paid';
      case InvoiceStatuses.UNPAID:
        return 'Unpaid';
      case InvoiceStatuses.PENDING:
        return 'Pending';
      default:
        return 'Unknown';
    }
  }
}
