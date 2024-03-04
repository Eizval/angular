import { Injectable, OnChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnChanges{
private _isLoggedIn: boolean = false;

public get isLoggedIn(){
  return this._isLoggedIn;
}

public constructor() { 
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  console.log(isLoggedIn, 'Constracter')

  if (isLoggedIn === 'true'){
    console.log(isLoggedIn)
    this._isLoggedIn = true;
  }
}

public ngOnChanges(changes: any): void{
  console.log(changes) 
}

  public setIsLoggedIn(isLoggedIn: boolean): void{
    this._isLoggedIn = isLoggedIn;
    localStorage.setItem('isLoggedIn', '' + this.isLoggedIn)
    console.log(isLoggedIn)
  }
}
