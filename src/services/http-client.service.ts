import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlApi} from "./url-api";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRequest<T>(url: string): Observable<T> {
    const token: string|null = localStorage.getItem(UrlApi.keyTokenJWT);
    let headers = undefined;
    if (token) {
      headers = {
        'Content-type': 'application/ld+json',
        'Authorization': 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*'
      };
    }
    return this.httpClient.get<T>(url, {
      headers: headers,
    });
  }

  loginCheck(data: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(UrlApi.loginCheck, data);
  }

}
