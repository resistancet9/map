import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('https://indian-cities-api-nocbegfhqg.now.sh/cities');
  }
}