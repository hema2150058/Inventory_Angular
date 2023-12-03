export class UserModel {
     "id" : number;
     "username" : string;
     "password" : string;
     "name" : string
     "email" : string
     "phone" : string;
     "dob" : string;
     constructor(){}

}

export class User {
    constructor(
      public username: string,
      private password : string,
      private _token: string,
      private serverCurrentTime: number,
      private _tokenExpirationTime: number
    ) { }
  
    get token() {
      return this._token;
    }
  
    get tokenExpirationTime() {
      return this._tokenExpirationTime;
    }
  }

export class UserDetails {
  "id" : number;
  "username" : string;
  "name" : string
  "email" : string
  "phone" : string;
  "dob" : string;
}