import { Component, Input, AfterViewInit, ElementRef, DoCheck, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})

export class InputComponent implements  AfterViewInit, DoCheck, OnInit {

  @Input() helperText: string = '';
  @Input() typeInput: string = '';
  @Input() label: string = '';
  @Input() controlName: string = '';
  @Input() groupName: any;
  @Input() inputSVG: string = '';
  
  isFocused: boolean = false;
  dirty: boolean = false;
  userName: string = '';

  constructor(private el: ElementRef) { }

  
  ngOnInit():void{
    console.log(this.helperText)
    console.log('111')
    console.log(this.label)
  }

  ngDoCheck(): void {
    const formField = (this.el.nativeElement as HTMLElement).querySelector('input');
    // tslint:disable-next-line: no-construct
    const ttim = new String(formField?.value.trim())

    if ( ttim?.length >= 1 ) {
      this.dirty = true;
    } else {
      this.dirty = false;
    }
  }

  ngAfterViewInit(): void {
    const formField = (this.el.nativeElement as HTMLElement).querySelector('input');

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
