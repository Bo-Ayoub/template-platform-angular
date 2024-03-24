import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorkComponent } from './section-work.component';

describe('SectionWorkComponent', () => {
  let component: SectionWorkComponent;
  let fixture: ComponentFixture<SectionWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionWorkComponent]
    });
    fixture = TestBed.createComponent(SectionWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
