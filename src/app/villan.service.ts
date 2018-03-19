import { Injectable } from '@angular/core';
import { Villan } from './villans/villans';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VillanService {

  private villansUrl = 'api/villans';  // URL to web api

  constructor( private http: HttpClient,
               private messageService: MessageService) {}


    getVillan(): Observable<Villan[]> {
    // Todo: send the message _after_ fetching the villans
    this.messageService.add('VillanService: fetched villans');
      return this.http.get<Villan[]>(this.villansUrl)
      .pipe(
        tap(villans => this.log(`fetched villans`)),
        catchError(this.handleError('getVillan', []))
      );
  }

  /** GETvillan by id. Will 404 if id not found */
  getVillans(id: number): Observable<Villan> {
    const url = `${this.villansUrl}/${id}`;
    return this.http.get<Villan>(url).pipe(
      tap(_ => this.log(`fetched villan id=${id}`)),
      catchError(this.handleError<Villan>(`getVillan id=${id}`))
    );
  }

  getVillanNo404<Data>(id: number): Observable<Villan> {
    const url = `${this.villansUrl}/?id=${id}`;
    return this.http.get<Villan[]>(url)
      .pipe(
        map(villans => villans[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} villan id=${id}`);
        }),
        catchError(this.handleError<Villan>(`getVillan id=${id}`))
      );
  }

  /* GET Villanes whose name contains search term */
  searchVillans(term: string): Observable<Villan[]> {
    if (!term.trim()) {
      // if not search term, return empty Villan array.
      return of([]);
    }
    return this.http.get<Villan[]>(`api/villans/?name=${term}`)
    .pipe(
      tap(_ => this.log(`found villans matching "${term}"`)),
      catchError(this.handleError<Villan[]>('searchvillans', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new villan to the server */
  addVillan ( villan: Villan ): Observable<Villan> {
    return this.http.post<Villan>(this.villansUrl, villan, httpOptions)
    .pipe(
      tap((villans: Villan) => this.log(`added villan w/ id=${villan.id}`)),
      catchError(this.handleError<Villan>('addVillan'))
    );
  }

  /** DELETE: delete the villan from the server */
  deleteVillan(villan: Villan | number): Observable<Villan> {
    const id = typeof villan === 'number' ? villan : villan.id;
    const url = `${this.villansUrl}/${id}`;

   return this.http.delete<Villan>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted villan id=${id}`)),
      catchError(this.handleError<Villan>('deleteVillan'))
    );
  }

  /** PUT: update the villan on the server */
  updateVillan(villan: Villan): Observable<any> {
    return this.http.put(this.villansUrl, villan, httpOptions)
    .pipe(
      tap(_ => this.log(`updated villan id=${villan.id}`)),
      catchError(this.handleError<any>('updateVillan'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a VillanService message with the MessageService */
  private log(message: string) {
    this.messageService.add('VillanService: ' + message);
  }
}


