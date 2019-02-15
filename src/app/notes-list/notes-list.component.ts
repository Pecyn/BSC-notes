import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[];

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id)
      .subscribe(() => {
        this.notes = [];
        this.getNotes();
      });
  }

  viewDetail(id: number): void {
    this.router.navigate([`/detail/${id}`])
      .then(result => {
        if (!result) {
          console.error('navigation failed');
        }
      })
      .catch(error => console.error('navigation error', error));
  }

  createNote(): void {
    this.router.navigate(['new-note'])
      .then(result => {
        if (!result) {
          console.error('navigation failed');
        }
      })
      .catch(error => console.error('navigation error', error));
  }

  constructor(
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNotes();
  }

}
