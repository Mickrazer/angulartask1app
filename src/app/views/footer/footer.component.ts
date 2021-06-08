import {Component, OnInit} from '@angular/core';
import {FooterDataHandlerService} from '../../service/footer-data-handler.service';
import {FooterInterface} from '../../model/footer.interface';
import {DataHandlerService} from '../../service/base-data-handler.service';
import {BaseInterface} from '../../model/base.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  public footer: FooterInterface[] = [];
  public selectedStatus: FooterInterface = {title: "", status: ""};
  public mainArray: BaseInterface[] = [];
  public counterArray: number[] = [];

  constructor(private footerDataHandler: FooterDataHandlerService, private baseDataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.mainArray = this.baseDataHandler.getBaseData();
    this.footer = this.footerDataHandler.getFooterData();
    this.selectedStatus = this.footer[0];
    this.counterArray.push(this.mainArray.length);
    for (let i = 1; i < this.mainArray.length; i++) {
      this.counterArray.push(this.counterBaseDataByStatus(this.footer[i]));
    }
  }

  showBaseDataByStatus(filter: FooterInterface): void {
    this.selectedStatus = filter;
    this.baseDataHandler.fillBaseDataByStatus(filter);
    if (filter.status === 'Все') {
      this.baseDataHandler.fillBaseData();
      this.baseDataHandler.fillDetailedData();
    }
  }

  counterBaseDataByStatus(filter: FooterInterface): number {
    return this.baseDataHandler.getBaseDataByStatus(filter);
  }

}
