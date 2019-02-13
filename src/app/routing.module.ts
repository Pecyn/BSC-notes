import { NgModule } from '@angular/core';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { RouterModule, Routes } from '@angular/router';
import {NewNoteComponent} from './new-note/new-note.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NotesListComponent },
  { path: 'detail/:id', component: NoteDetailComponent },
  { path: 'new-note', component: NewNoteComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class RoutingModule { }
