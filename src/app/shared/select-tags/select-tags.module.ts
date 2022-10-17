import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectTagsComponent} from './select-tags.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [SelectTagsComponent],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [SelectTagsComponent]
})
export class SelectTagsModule { }
