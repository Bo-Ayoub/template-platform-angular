import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OffCanvaComponent } from './off-canva/off-canva.component';
import { SectionComponent } from './section/section.component';
import { SectionAchievementComponent } from './section-achievement/section-achievement.component';
import { SectionWorkComponent } from './section-work/section-work.component';
import { SectionPlanComponent } from './section-plan/section-plan.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SectionRegisterDomainComponent } from './section-register-domain/section-register-domain.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OffCanvaComponent,
    SectionComponent,
    SectionAchievementComponent,
    SectionWorkComponent,
    SectionPlanComponent,
    SectionServicesComponent,
    SectionRegisterDomainComponent,
    SectionHeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    OffCanvaComponent,
    SectionComponent,
    SectionAchievementComponent,
    SectionWorkComponent,
    SectionPlanComponent,
    SectionServicesComponent,
    SectionRegisterDomainComponent,
    SectionHeroComponent

  ]
})
export class SharedModule { }
