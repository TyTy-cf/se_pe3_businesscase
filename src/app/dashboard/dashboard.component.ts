import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../services/url-api";
import {HttpClientService} from "../../services/http-client.service";
import {Command} from "../../models/command";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  token: string|null = localStorage.getItem(UrlApi.keyTokenJWT);

  constructor(
    private httpClient: HttpClientService
  ) { }

  ngOnInit(): void {
    console.log(this.token);
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
