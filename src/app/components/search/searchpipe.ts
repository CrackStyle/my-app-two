import { Pipe, PipeTransform } from "@angular/core";
import { Ipublikation } from "../models/publikation";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  //transform(value: Ipublikation[], filterBy: any): any {
    //filterBy = filterBy.toLocaleLowerCase();
    //return filterBy ? value.filter((product: any) =>
        //product.textsearch.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  //}

  transform(products: Ipublikation[], search: string): Ipublikation [] {
    return products.filter(p => p.textsearch.toLowerCase().includes(search.toLowerCase()))
  }
}