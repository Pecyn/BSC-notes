import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesApi = 'https://private-anon-45b829eeff-note10.apiary-mock.com/notes';

  getNotes(): Observable<Note[]> {
    console.log('fetching notes ...');
    return this.http.get<Note[]>(this.notesApi)
      .pipe(
        tap( _ => console.log('notes fetched')),
        catchError(this.handleError('get notes', []))
      );
  }

  getNote(id: number): Observable<Note> {
    const url = `${this.notesApi}/${id}`;
    return this.http.get<Note>(url).pipe(
        tap(_ => console.log(`fetched note id:${id}`)),
        catchError(this.handleError<Note>(`get note id:${id}`))
      );
  }

  deleteNote(id: number): Observable<Note> {
    const url = `${this.notesApi}/${id}`;
    return this.http.delete<Note>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted note id:${id}`)),
      catchError(this.handleError<Note>(`get note id:${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      console.error(error);
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) { }
}
