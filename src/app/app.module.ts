import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { RoutingModule } from './routing.module';
import { NewNoteComponent } from './new-note/new-note.component';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): () => void {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteDetailComponent,
    NewNoteComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private translate: TranslateService) {
  //   translate.use('en').then(() => {
  //     console.log(translate.data);
  //   });
  // }
}
