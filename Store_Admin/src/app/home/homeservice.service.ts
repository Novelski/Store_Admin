import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  urlAPI = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllInventory() {
    return this.http.get(this.urlAPI + 'Inventories');
  }

 
}