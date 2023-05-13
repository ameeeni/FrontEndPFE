import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientPar} from "../client-particulier/client-par";
import {Observable} from "rxjs";
import {ClientPro} from "./client-pro";

@Injectable({
  providedIn: 'root'
})
export class ClientProService {

  constructor(private _http : HttpClient) { }
  RegisterFromClientPro(userPro: ClientPro) :Observable<any>{
    return this._http.post("http://localhost:8081/ClientProfessionnel" , userPro);

  }
}
