import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date ): string {
    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', // Full name of the day (e.g., "Monday")
      year: 'numeric', // Year (e.g., "2024")
      month: 'long',   // Full name of the month (e.g., "January")
      day: 'numeric'   // Day of the month (e.g., "1", "2", "3", etc.)
    };
    return date.toLocaleDateString('en-US', options);
  }

}
