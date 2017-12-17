import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumEditorComponent } from './medium-editor.component';

describe('MediumEditorComponent', () => {
  let component: MediumEditorComponent;
  let fixture: ComponentFixture<MediumEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
