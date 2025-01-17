import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : undefined;
    return filterText
      ? value.filter(
          (p: Product) =>
            p.name.toLowerCase().indexOf(filterText!.toLowerCase()) !== -1
        )
      : value;
  }
}
