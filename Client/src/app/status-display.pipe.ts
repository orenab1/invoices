import { Pipe, PipeTransform } from '@angular/core';

// Assuming InvoiceStatuses is an enum with numeric values
enum InvoiceStatuses {
  Draft = 1,
  Open = 2,
  Paid = 3,
  Void = 4,
  Uncollectible = 5,
}

@Pipe({
  name: 'statusDisplay',
})

export class StatusDisplayPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case InvoiceStatuses.Draft:
        return 'Draft';
      case InvoiceStatuses.Open:
        return 'Open';
      case InvoiceStatuses.Paid:
        return 'Paid';
      case InvoiceStatuses.Void:
        return 'Void';
      case InvoiceStatuses.Uncollectible:
        return 'Uncollectible';
      default:
        return 'Unknown';
    }
  }
}
