import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialWidgetComponent } from './material-widget.component';

describe('MaterialWidgetComponent', () => {
  let component: MaterialWidgetComponent;
  let fixture: ComponentFixture<MaterialWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
