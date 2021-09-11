import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewOrdersService {
  urlAPI = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllNewOrders() {
    return this.http.get(this.urlAPI + 'Orders');
  }


  DeleteInventoryById(id: any) {
    
    return this.http.delete(this.urlAPI + 'DeliveryBoys/' + id);
  }
}