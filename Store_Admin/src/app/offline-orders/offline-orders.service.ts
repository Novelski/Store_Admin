import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { OfflineOrdr } from './home';
@Injectable({
  providedIn: 'root'
})
export class OfflineOrdersService {
  urlAPI = environment.baseURL

  constructor (private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getItemList (): Observable<OfflineOrdr[]> {
    return this.http.get<OfflineOrdr[]>(this.urlAPI + 'Offline_Orders').pipe(
      tap(songs => console.log('Item fetched!')),
      catchError(this.handleError<OfflineOrdr[]>('Get Items', []))
    )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
  addSong(song: OfflineOrdr): Observable<any> {
    return this.http.post<OfflineOrdr>(this.urlAPI + 'Offline_Orders/', song, this.httpOptions)
      .pipe(
        catchError(this.handleError<OfflineOrdr>('Added'))
      );
  }

  getSong(id): Observable<OfflineOrdr[]> {
    return this.http.get<OfflineOrdr[]>(this.urlAPI + 'Offline_Orders/' + id)
      .pipe(
        tap(_ => console.log(`Item fetched: ${id}`)),
        catchError(this.handleError<OfflineOrdr[]>(`Get  id=${id}`))
      );
  }

 

  updateSong(id, song: OfflineOrdr): Observable<any> {
    return this.http.put(this.urlAPI + 'Offline_Orders/' + id, song, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated: ${id}`)),
        catchError(this.handleError<OfflineOrdr[]>('Updated'))
      );
  }

 

  deleteItem(id): Observable<OfflineOrdr[]> {
    return this.http.delete<OfflineOrdr[]>(this.urlAPI + 'Offline_Orders/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Item deleted: ${id}`)),
        catchError(this.handleError<OfflineOrdr[]>('Delete Item'))
      );
  }
}
