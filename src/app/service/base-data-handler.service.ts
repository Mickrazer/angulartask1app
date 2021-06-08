import { Injectable } from '@angular/core';
import { BaseInterface } from '../model/base.interface';
import { FooterInterface } from '../model/footer.interface';
import { baseData } from '../data/BaseData';
import { BehaviorSubject, Subject } from 'rxjs';
import {detailedData} from "../data/DetaildeData";
import {DetaildeInterface} from "../model/detailed.interface";


@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  baseDataSubject = new BehaviorSubject<BaseInterface[]>(baseData);
  detailedDataSubject = new BehaviorSubject<DetaildeInterface[]>(detailedData);
  selectedDetailedData = new BehaviorSubject(false);

  constructor() { }

  fillBaseData(): void {
    this.baseDataSubject.next(baseData);
  }

  fillDetailedData(): void {
   this.detailedDataSubject.next(detailedData);
  }

  getBaseData(): BaseInterface[] {
    return baseData;
  }

  fillBaseDataByStatus(status: FooterInterface): void{
    const filters = baseData.filter(value => value.status === status);
    const filter = detailedData.filter(value => value.state === status);
    this.detailedDataSubject.next(filter);
    this.baseDataSubject.next(filters);
  }
  getBaseDataByStatus(status: FooterInterface): number{
    const fil = baseData.filter(value => value.status === status);
    return fil.length;
  }

}
