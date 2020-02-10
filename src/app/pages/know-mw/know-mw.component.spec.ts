import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMwComponent } from './know-mw.component';

describe('KnowMwComponent', () => {
  let component: KnowMwComponent;
  let fixture: ComponentFixture<KnowMwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
