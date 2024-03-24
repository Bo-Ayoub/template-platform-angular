import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRegisterDomainComponent } from './section-register-domain.component';

describe('SectionRegisterDomainComponent', () => {
  let component: SectionRegisterDomainComponent;
  let fixture: ComponentFixture<SectionRegisterDomainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionRegisterDomainComponent]
    });
    fixture = TestBed.createComponent(SectionRegisterDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
