import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { map, catchError, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { DeliveryBoy  } from './home'

@Injectable({
  providedIn: 'root'
})
export class DeliveryBoyService {
  urlAPI = environment.baseURL

  constructor (private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getItemList (): Observable<DeliveryBoy[]> {
    return this.http.get<DeliveryBoy[]>(this.urlAPI + 'DeliveryBoys').pipe(
      tap(songs => console.log('Details fetched!')),
      catchError(this.handleError<DeliveryBoy[]>('Get Items', []))
    )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
  addSong(song: DeliveryBoy): Observable<any> {
    return this.http.post<DeliveryBoy>(this.urlAPI + 'DeliveryBoys/', song, this.httpOptions)
      .pipe(
        catchError(this.handleError<DeliveryBoy>('Added'))
      );
  }

  getSong(id): Observable<DeliveryBoy[]> {
    return this.http.get<DeliveryBoy[]>(this.urlAPI + 'DeliveryBoys/' + id)
      .pipe(
        tap(_ => console.log(`Item fetched: ${id}`)),
        catchError(this.handleError<DeliveryBoy[]>(`Get  id=${id}`))
      );
  }

 

  updateSong(id, song: DeliveryBoy): Observable<any> {
    return this.http.put(this.urlAPI + 'DeliveryBoys/' + id, song, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated: ${id}`)),
        catchError(this.handleError<DeliveryBoy[]>('Updated'))
      );
  }

 

  deleteItem(id): Observable<DeliveryBoy[]> {
    return this.http.delete<DeliveryBoy[]>(this.urlAPI + 'DeliveryBoys/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Item deleted: ${id}`)),
        catchError(this.handleError<DeliveryBoy[]>('Delete Item'))
      );
  }
}