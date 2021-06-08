import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../service/base-data-handler.service';
import { BaseInterface } from '../../model/base.interface';
import { DetaildeInterface } from '../../model/detailed.interface';
import { FooterInterface } from '../../model/footer.interface';
import {DetailedDataHandlerService} from "../../service/detailed-data-handler.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public switchView: boolean = true;
  public baseViews: BaseInterface[] = [];
  public detailedViews: DetaildeInterface[] = [];

  constructor(private baseDataHandler: DataHandlerService, private detailedDataHandler: DetailedDataHandlerService) {
  }

  ngOnInit(): void {
    this.baseDataHandler.baseDataSubject.subscribe(value => this.baseViews = value);
    this.baseDataHandler.detailedDataSubject.subscribe(value => this.detailedViews = value);
    this.baseDataHandler.selectedDetailedData.subscribe(value => this.switchView = value);
  }

  changeBaseDataClass(baseStatus: FooterInterface): boolean{
    if (baseStatus.status === " Новое "){
      return true;
    } else {
      return false;
    }
  }

}
