import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientPar} from "./client-par";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientParService {

  constructor(private _http : HttpClient) { }
    RegisterFromClientPar(userPar: ClientPar) :Observable<any>{
     return this._http.post("http://localhost:8081/ClientParticulier" , userPar);

  }
}
