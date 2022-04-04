import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxaComponent } from './boxa.component';

describe('BoxaComponent', () => {
  let component: BoxaComponent;
  let fixture: ComponentFixture<BoxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
