import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bioLength',
  standalone: true,
})
export class BioLengthPipe implements PipeTransform {
  transform(value: string | undefined, limit: number): unknown {
    return value?.split(".").filter((_, index) => index < limit).join(".") + ".";
  }
}
