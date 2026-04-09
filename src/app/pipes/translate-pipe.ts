import { Pipe, PipeTransform } from '@angular/core';
import { Translate } from '../services/translate';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: Translate) {}

  transform(key: string): string {
    return this.translateService.translate(key);
  }

}
