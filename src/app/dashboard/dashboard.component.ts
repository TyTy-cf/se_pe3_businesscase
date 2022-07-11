import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../services/url-api";
import {HttpClientService} from "../../services/http-client.service";
import {HttpErrorResponse} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {Data} from "../../models/data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private httpClient: HttpClientService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    const currentDate = new Date();
    const minDate = new Date(new Date().setMonth(new Date().getMonth() - 2));

    this.httpClient.getRequest<Data>(
      UrlApi.commandRecurrence,
      this.datePipe.transform(minDate, 'yyyy-MM-dd')!,
      this.datePipe.transform(currentDate, 'yyyy-MM-dd')!
    ).subscribe(
      (json) => {
        console.log(json);
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          console.log(error.message)
        }
      }
    );
  }

  updateDatas(urlEventClickSidebar: string): void {
    // this.httpClient.getRequest(urlEventClickSidebar).subscribe((json) => {
    //   console.log(json);
    // });
  }

}
