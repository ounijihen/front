import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDocComponent } from './demande-doc.component';

describe('DemandeDocComponent', () => {
  let component: DemandeDocComponent;
  let fixture: ComponentFixture<DemandeDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandeDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
