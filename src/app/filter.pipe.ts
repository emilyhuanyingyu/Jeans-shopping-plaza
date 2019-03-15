import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText?: any): any {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toString().toLowerCase();
    return items.filter( item => {
      return item.name.toString().toLowerCase().includes(searchText);
    });
       
  }
}
