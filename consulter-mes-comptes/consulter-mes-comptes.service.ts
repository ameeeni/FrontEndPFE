import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ConsulterMesComptesService {

  constructor(private _http : HttpClient) { }
  getAccountById():Observable<any>{
    let params1 = new HttpParams().set("id" , "51")
    return this._http.get("http://localhost:8081/CompteEpargne/1");

  }
}
