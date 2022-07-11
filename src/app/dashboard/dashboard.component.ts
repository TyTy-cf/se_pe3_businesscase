import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../services/url-api";
import {HttpClientService} from "../../services/http-client.service";
import {Command} from "../../models/command";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private httpClient: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClient.getRequest(UrlApi.commandRecurrence).subscribe(
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
    this.httpClient.getRequest(urlEventClickSidebar).subscribe((json) => {
      console.log(json);
    });
  }

}
