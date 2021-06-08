import { Injectable } from '@angular/core';
import {DetaildeInterface} from "../model/detailed.interface";
import {detailedData} from "../data/DetaildeData";

@Injectable({
  providedIn: 'root'
})
export class DetailedDataHandlerService {

  constructor() { }

  getDetailedData(): DetaildeInterface[] {
    return detailedData;
  }
}
