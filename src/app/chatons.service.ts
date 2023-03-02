import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Chatons } from './models/chatons.model';

@Injectable({
  providedIn: 'root'
})
export class ChatonsService {
  constructor(public http: HttpClient) { }
  public getChatons(): Observable<Chatons[]> {
    return this.http.get<Chatons[]>("assets/chatons.json");
  }
}
