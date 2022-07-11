import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../services/url-api";
import {HttpClientService} from "../../services/http-client.service";
import {Command} from "../../models/command";
import {HttpHeaders} from "@angular/common/http";

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
    this.httpClient.getRequest<Command>(UrlApi.commandRecurrence).subscribe((json) => {
      console.log(json);
    });
  }

  updateDatas(urlEventClickSidebar: string): void {
    this.httpClient.getRequest<Command>(urlEventClickSidebar).subscribe((json) => {
      console.log(json);
    });
  }

}
