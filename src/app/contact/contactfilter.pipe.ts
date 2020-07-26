import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactfilter'
})
export class ContactfilterPipe implements PipeTransform {
  transform(contact: any, keyword: any): any {
    if (keyword === undefined) return contact;
    console.log(contact);
    return contact.filter(function (contact) {
      return contact.contactName.toLowerCase().includes(keyword.toLowerCase())
    })
  }
}
