import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactfilter'
})
export class ContactfilterPipe implements PipeTransform {
  transform(contact: any, keyword: any): any {
    if (keyword === undefined) return contact;

    return contact.filter(function (contact) {
      return contact.Name.toLowerCase().includes(keyword.toLowerCase())
    })
  }
}
