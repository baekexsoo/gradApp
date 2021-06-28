import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class YieldService {

  constructor(private _http: HttpClient) { }

    rendement() {
      return this._http.get("https://api.duniyadata.com/dunya/rendements/year?produit=Arachide")
      .map(result => result);
    }

}
