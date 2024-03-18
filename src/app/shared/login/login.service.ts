import { Injectable, OnChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnChanges{
private _isLoggedIn: boolean = false;
private _isAdmin: boolean = false;

public get isLoggedIn(){
  return this._isLoggedIn;
}

public get isAdmin(){
  return this._isAdmin;
}

public constructor() { 
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const isAdmin = localStorage.getItem('isAdmin')

  console.log(isLoggedIn, 'Constracter')

  if (isLoggedIn === 'true'){
    console.log(isLoggedIn)
    this._isLoggedIn = true;
  }

  if (isAdmin === 'true'){
    this._isAdmin = true;
  }
}

public ngOnChanges(changes: any): void{
  console.log(changes) 
}

  public setIsLoggedIn(isLoggedIn: boolean): void{
    this._isLoggedIn = isLoggedIn;
    this._isAdmin = this.isAdmin;
    localStorage.setItem('isLoggedIn', '' + this.isLoggedIn)
    localStorage.setItem('isAdmin', '' + this.isAdmin )
    console.log(isLoggedIn)
    console.log(this._isAdmin + ' isAdmin')
  }
}
