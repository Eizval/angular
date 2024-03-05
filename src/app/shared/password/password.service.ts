import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
private _isAdmin: boolean = false;

public get isAdmin(){
  return this._isAdmin;
}

public constructor() { 
  const isAdmin = localStorage.getItem('isAdmin')

}

public setIsAdmin(isLoggedIn: boolean): void{
  this._isAdmin = isLoggedIn;
  localStorage.setItem('isAdmin', '' + this.isAdmin)
}

}
