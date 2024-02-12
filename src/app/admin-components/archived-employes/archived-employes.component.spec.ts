import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedEmployesComponent } from './archived-employes.component';

describe('ArchivedEmployesComponent', () => {
  let component: ArchivedEmployesComponent;
  let fixture: ComponentFixture<ArchivedEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivedEmployesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivedEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
