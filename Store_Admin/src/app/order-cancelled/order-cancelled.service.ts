import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { OrdrCanl } from './home';

@Injectable({
  providedIn: 'root'
})
export class OrderCancelledService {
  urlAPI = environment.baseURL

  constructor (private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getItemList (): Observable<OrdrCanl[]> {
    return this.http.get<OrdrCanl[]>(this.urlAPI + 'Cancel_Order').pipe(
      tap(songs => console.log('Item fetched!')),
      catchError(this.handleError<OrdrCanl[]>('Get Items', []))
    )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
}
