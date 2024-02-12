import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEmployeComponent } from './info-employe.component';

describe('InfoEmployeComponent', () => {
  let component: InfoEmployeComponent;
  let fixture: ComponentFixture<InfoEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
