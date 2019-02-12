import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

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
        this.getNotes();
      });
  }

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

}
