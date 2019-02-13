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
        this.getNotes();
      });
  }

  viewDetail(id: number): void {
    this.router.navigate([`/detail/${id}`]);
  }

  constructor(
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNotes();
  }

}
