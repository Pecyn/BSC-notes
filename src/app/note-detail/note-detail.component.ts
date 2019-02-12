import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-notes-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  @Input() note: Note = new Note();

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService) {}

  getNote() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(note => this.note = note);
  }

  ngOnInit() {
    this.getNote();
  }

}
