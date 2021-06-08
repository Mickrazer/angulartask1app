import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../service/base-data-handler.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  switchSelectedData: boolean = false;
  constructor(private detailedDataHandler: DataHandlerService) { }

  ngOnInit(): void {
  }

  public clicked(): void {
    this.switchSelectedData = !this.switchSelectedData;
    this.detailedDataHandler.selectedDetailedData.next(this.switchSelectedData);
  }

}
