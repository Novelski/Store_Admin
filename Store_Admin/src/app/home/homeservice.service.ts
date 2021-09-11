import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { Inventory } from './home'
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  urlAPI = environment.baseURL

  constructor (private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getItemList (): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.urlAPI + 'Inventories').pipe(
      tap(songs => console.log('Item fetched!')),
      catchError(this.handleError<Inventory[]>('Get Items', []))
    )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
  addSong(song: Inventory): Observable<any> {
    return this.http.post<Inventory>(this.urlAPI + 'Inventories/', song, this.httpOptions)
      .pipe(
        catchError(this.handleError<Inventory>('Added'))
      );
  }

  getSong(id): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.urlAPI + 'Inventories/' + id)
      .pipe(
        tap(_ => console.log(`Item fetched: ${id}`)),
        catchError(this.handleError<Inventory[]>(`Get  id=${id}`))
      );
  }

 

  updateSong(id, song: Inventory): Observable<any> {
    return this.http.put(this.urlAPI + 'Inventories/' + id, song, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated: ${id}`)),
        catchError(this.handleError<Inventory[]>('Updated'))
      );
  }

 

  deleteItem(id): Observable<Inventory[]> {
    return this.http.delete<Inventory[]>(this.urlAPI + 'Inventories/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Item deleted: ${id}`)),
        catchError(this.handleError<Inventory[]>('Delete Item'))
      );
  }
}
