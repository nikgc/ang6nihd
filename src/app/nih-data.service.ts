import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVICE_BASE_URL} from './constants';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NihDataService {
  constructor(private http: HttpClient) { }
  getUsers() : Observable<any> {
    return this.http
            .get(`${SERVICE_BASE_URL}/users`)
            .pipe(
              map(r => r),
              catchError(err => err.code === 404 
                ? Observable.throw("Not found")
                : Observable.throw(err))
            )
  }

  getUser(id: number) : Observable<any> {
    return this.http
            .get(`${SERVICE_BASE_URL}/users/${id}`)
            .pipe(
              map(r => r),
              catchError(err => err.code === 404 
                ? Observable.throw("Not found")
                : Observable.throw(err))
            )
  }

  getPosts() : Observable<any> {
    return this.http
            .get(`${SERVICE_BASE_URL}/posts`)
            .pipe(
              map(r => r),
              catchError(err => err.code === 404 
                ? Observable.throw("Not found")
                : Observable.throw(err))
            )
  }

  addPost(post) : Observable<any> {
    return this.http
            .post(`${SERVICE_BASE_URL}/posts`, post)
            .pipe(
              map(r => r),
              catchError(err => err.code === 404 
                ? Observable.throw("Not found")
                : Observable.throw(err))
            )
  }

}
