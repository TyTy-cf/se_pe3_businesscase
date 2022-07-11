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
    return this.httpClient.get<T>(url);
  }

  loginCheck(data: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(UrlApi.loginCheck, data);
  }

}
