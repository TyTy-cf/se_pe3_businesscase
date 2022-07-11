import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlApi} from "./url-api";
import {DatePipe, formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRequest<T>(url: string, dateMin: string, dateMax: string): Observable<T> {
    const token: string|null = localStorage.getItem(UrlApi.keyTokenJWT);
    let headers = undefined;
    if (token) {
      headers = {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
        // 'Access-Control-Allow-Origin': '*'
      };
    }

    let params = new HttpParams();
    params = params.append('min_date', dateMin);
    params = params.append('max_date', dateMax);

    return this.httpClient.get<T>(url, {
      headers: headers,
      params: params,
    });
  }

  getRequestAny(url: string, dateMin: string, dateMax: string): Observable<any> {
    const token: string|null = localStorage.getItem(UrlApi.keyTokenJWT);
    let headers = undefined;
    if (token) {
      headers = {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
        // 'Access-Control-Allow-Origin': '*'
      };
    }

    let params = new HttpParams();
    params = params.append('min_date', dateMin);
    params = params.append('max_date', dateMax);

    return this.httpClient.get(url, {
      headers: headers,
      params: params,
    });
  }

  loginCheck(data: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(UrlApi.loginCheck, data);
  }

}
