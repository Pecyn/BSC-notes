import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { ActivatedRoute } from '@angular/router';

const notesMock: Note[] = [
  { id: 1, title: 'nazdar' },
  { id: 2, title: 'bazar' }
];

@Component({
  selector: 'app-notes-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  note: Note;

  constructor(private route: ActivatedRoute) {}

  getNote() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.note = notesMock[id - 1];
  }

  ngOnInit() {
    this.getNote();
  }

}
