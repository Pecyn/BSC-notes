import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  @Input() note: Note;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) { }

  getNote(): void {
    console.log(this.note);
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(note => {
        console.log(note);
        this.note = note;
      });
  }

  saveNote(): void {
    this.noteService.updateNote(this.note)
      .subscribe();
  }

  goToNotesList(): void {
    this.router.navigate(['/notes'])
      .then(result => {
        if (!result) {
          console.error('navigation failed');
        }
      })
      .catch(error => console.error('navigation error', error));
  }

  ngOnInit() {
    this.getNote();
  }

}
