import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadDogsService {
  dogsAPIurl: string =
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=50';

  constructor(private http: HttpClient) {}

  getDogs(): Observable<any> {
    return this.http.get(this.dogsAPIurl, {});
  }
}
