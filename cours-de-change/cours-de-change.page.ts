import { Component, OnInit } from '@angular/core';
import {data, getJSON} from "jquery";
import {catchError, Observable, retry} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cours-de-change',
  templateUrl: './cours-de-change.page.html',
  styleUrls: ['./cours-de-change.page.scss'],
})
export class CoursDeChangePage implements OnInit {
 to:any;
 from:any;
 amount:any;
 res:any;
  private errorHandl: any;
  constructor(private http:HttpClient) {
  }

  ngOnInit() {


  }
  getCurrency() {

    let myHeaders = new Headers();
    myHeaders.append("apikey", "rLO4ckAfu4bF4yA5BUEfJ81MP21oTrKW");
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    // @ts-ignore

    // this.res = fetch(`https://api.apilayer.com/fixer/convert?to=${this.to}&from=${this.from}&amount=${this.amount}`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // console.log(this.res.result)
    this.res=this.GetC();
    console.log(this.res)
  }

// GET
  GetC(): Observable<any> {
    return this.http
      .get<any>("https://api.apilayer.com/fixer/convert?to=EUR&from=USD&amount=123&apikey=rLO4ckAfu4bF4yA5BUEfJ81MP21oTrKW")
      .pipe(retry(1), catchError(this.errorHandl));

  }
}

