import { Injectable } from '@angular/core';
import { footerData } from '../data/FooterData'
import { FooterInterface } from '../model/footer.interface'

@Injectable({
  providedIn: 'root'
})
export class FooterDataHandlerService {

  constructor() { }

    getFooterData(): FooterInterface[] {
    return footerData;
  }
}
