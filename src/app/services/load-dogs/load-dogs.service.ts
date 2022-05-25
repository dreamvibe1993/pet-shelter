import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadPetsService {
  constructor(private http: HttpClient) {}
  
  getDogs(dogsAPIurl: string): Observable<any> {
    return this.http.get(dogsAPIurl, {});
  }
}
