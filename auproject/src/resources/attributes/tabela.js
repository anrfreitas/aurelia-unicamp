import {inject} from 'aurelia-framework';

@inject(Element)
export class TabelaCustomAttribute {
  constructor(element) {
    this.element = element;
    this.element.style.border = '1px solid red';
  }

  valueChanged(newValue, oldValue) {
    //
  }
}
