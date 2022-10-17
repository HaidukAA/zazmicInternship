import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageEditorComponent } from './image-editor.component';


@NgModule({
  declarations: [ImageEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ImageEditorComponent]
})
export class ImageEditorModule { }
