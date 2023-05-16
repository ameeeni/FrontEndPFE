import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public authenticated !: boolean;
  constructor() { }
  public login(email:string, password:string){
    if(email==='amenibramli27@outlook.fr' && password ==='ameni123'){
      this.authenticated=true;
    }else {
      this.authenticated=false;
    }
    return this.authenticated;

  }
}
