import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MathfactService {

  constructor(private readonly _http:HttpClient) { }


  getFact():Observable<string>{
    return this._http.get<string>(`${environment.apiUrl}`,{ responseType: 'text' as 'json' })
  }
}
