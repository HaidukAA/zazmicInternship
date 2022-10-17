import { AfterViewInit, Component, DoCheck, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements DoCheck, AfterViewInit {

  @Input() typeInput: string = '';
  @Input() label: string = '';
  @Input() controlName: string = '';
  @Input() groupName: any;

  
  isFocused: boolean = false;
  dirty: boolean = false;

  constructor(private el: ElementRef) { }

  ngDoCheck(): void {
    const formField = (this.el.nativeElement as HTMLElement).querySelector('textarea');
    // tslint:disable-next-line: no-construct
    const ttim = new String(formField?.value.trim())

    if ( ttim?.length >= 1 ) {
      this.dirty = true;
    } else {
      this.dirty = false;
    }
  }

  ngAfterViewInit(): void {
    const formField = (this.el.nativeElement as HTMLElement).querySelector('textarea');

    formField?.addEventListener('focus', () => this.focusInput());
    formField?.addEventListener('blur', () => this.focusOutInput());
  }

  focusInput(): void {
    this.isFocused = true;
  }

  focusOutInput(): void {
    this.isFocused = false;
  }

}
