import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncator',
  standalone: true,
})
export class TruncatorPipe implements PipeTransform {
  transform(value: string | undefined | any, limit: number): unknown {
    return value?.split(".").filter((_: any, index: any) => index < limit).join(".") + ".";
  }
}
