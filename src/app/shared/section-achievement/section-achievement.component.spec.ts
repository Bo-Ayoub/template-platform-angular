import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAchievementComponent } from './section-achievement.component';

describe('SectionAchievementComponent', () => {
  let component: SectionAchievementComponent;
  let fixture: ComponentFixture<SectionAchievementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAchievementComponent]
    });
    fixture = TestBed.createComponent(SectionAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
