import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/signInModel';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private isFormSubmitted: boolean = false;
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  createUser(data: user): Observable<any> {
    return this.http.post<user>(this.apiUrl, data);
  }
  setFormSubmitted(value: boolean) {
    this.isFormSubmitted = value;
  }

  getFormSubmitted() {
    return this.isFormSubmitted;
  }
}
