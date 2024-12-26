import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesScreenComponent } from './times-screen.component';

describe('TimesScreenComponent', () => {
  let component: TimesScreenComponent;
  let fixture: ComponentFixture<TimesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimesScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
