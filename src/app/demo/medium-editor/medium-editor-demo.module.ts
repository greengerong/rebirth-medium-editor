import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediumEditorDemoComponent } from './medium-editor-demo.component';
import { RebirthMediumEditorModule } from '../../exports';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RebirthMediumEditorModule, FormsModule],
  exports: [MediumEditorDemoComponent],
  declarations: [MediumEditorDemoComponent],
  providers: [],
  entryComponents: [MediumEditorDemoComponent]
})
export class MediumEditorDemoModule {
}
