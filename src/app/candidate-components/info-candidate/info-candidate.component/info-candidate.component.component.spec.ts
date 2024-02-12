import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCandidateComponentComponent } from './info-candidate.component.component';

describe('InfoCandidateComponentComponent', () => {
  let component: InfoCandidateComponentComponent;
  let fixture: ComponentFixture<InfoCandidateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCandidateComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCandidateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
