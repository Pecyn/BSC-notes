import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  @Input() noteTitle: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) { }

  saveNote(): void {
    if (this.noteTitle) {
      this.noteService.createNote(this.noteTitle)
        .subscribe(result => {
          console.log(`new note id: ${result.id}`);
          this.goToNotesList();
        });
    }
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
  }

}
