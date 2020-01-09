import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableBlackListComponent } from './datatable-black-list.component';

describe('DatatableBlackListComponent', () => {
  let component: DatatableBlackListComponent;
  let fixture: ComponentFixture<DatatableBlackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableBlackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableBlackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
