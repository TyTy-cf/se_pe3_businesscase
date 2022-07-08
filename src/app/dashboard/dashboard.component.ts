import { Component, OnInit } from '@angular/core';
import {UrlApi} from "../../services/url-api";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem(UrlApi.keyTokenJWT));
  }

}
