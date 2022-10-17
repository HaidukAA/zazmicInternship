import { Component, ElementRef, Input} from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FileUploadService } from 'src/app/auth/services/file-upload.service';


@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss']
})
export class ImageEditorComponent {


  
 @Input() activeColor: string = 'green';
 @Input() baseColor: string = '#ccc';
 @Input() overlayColor: string = 'rgba(255,255,255,0.5)';
 @Input() inputSVG: string = '';
 @Input() label: string = '';
 @Input() helperText: string = '';
 @Input() groupName: any;

 @Input() imageSrc: any = '';

  isFocused: boolean = false;
  dirty: boolean = false;
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  // imageSrc: string = '';

  constructor(private el: ElementRef, private uploadService: FileUploadService) 
  { 
    this.groupName = new UntypedFormGroup({
      IMGeditor: new UntypedFormControl('')
  });
  }

  handleDragEnter() {
      this.dragging = true;
  }
  
  handleDragLeave() {
      this.dragging = false;
  }
  
  handleDrop(e:any) {
      e.preventDefault();
      this.dragging = false;
      this.handleInputChange(e);
  }
  
  handleImageLoad() {
      this.imageLoaded = true;
  }

  handleInputChange(e:any) {
      const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

      const pattern = /image-*/;
      const reader = new FileReader();

      if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
      }

      this.loaded = false;

      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
  }
  
  _handleReaderLoaded(e:any) {
      const reader = e.target;
      this.imageSrc = reader.result;
      this.loaded = true;
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

}
