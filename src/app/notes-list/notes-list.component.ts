import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

const notesMock: Note[] = [
  { id: 1, title: 'nazdar' },
  { id: 2, title: 'bazar' }
];

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[];

  getNotes(): void {
    this.notes = notesMock;
  }

  constructor() { }

  ngOnInit() {
    this.getNotes();
  }

}
