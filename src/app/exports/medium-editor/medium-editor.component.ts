import {
  Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, OnInit,
  Output
} from '@angular/core';
import * as MediumEditor from 'medium-editor';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 're-medium-editor',
  templateUrl: './medium-editor.component.html',
  styleUrls: ['./medium-editor.component.scss'],
  exportAs: 'mediumEditor',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MediumEditorComponent),
    multi: true
  }]
})
export class MediumEditorComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() options: any;
  @Output() editorCreated = new EventEmitter<any>();
  editor: any;
  html: string;
  private onChange: (_: any) => null;
  private onTouched: () => null;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.editor = new MediumEditor(this.elementRef.nativeElement, this.options);
    this.editorCreated.emit(this.editor);
    this.editor.subscribe('editableInput', () => {
      this.onTouched();
      this.onChange(this.editor.getContent(0));
    });
  }

  writeValue(obj: any): void {
    this.html = obj || '';
    this.editor.setContent(this.html, 0);
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
