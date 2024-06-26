import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsalasService {
  private apiUrl = 'http://localhost:3000/salas';

  constructor(private http: HttpClient) { }

  // Método para registrar um novo professor
  registerSala(salaData: any): Observable<any> {
    return this.http.post(this.apiUrl, salaData);
  }
}
