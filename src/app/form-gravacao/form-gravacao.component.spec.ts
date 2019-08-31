import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGravacaoComponent } from './form-gravacao.component';

describe('FormGravacaoComponent', () => {
  let component: FormGravacaoComponent;
  let fixture: ComponentFixture<FormGravacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGravacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGravacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
