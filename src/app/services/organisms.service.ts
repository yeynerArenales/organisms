import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrganismsService {

  constructor(
    private http: HttpClient,
  ) { }

  getData(){
    return this.http.get(environment.ApiURL);
  }
}
